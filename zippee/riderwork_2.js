// riderwork.js — updated: Work Date parsing/formatting fix

// normalize header key names
function normKey(k){
  if(k === undefined || k === null) return '';
  return String(k).trim().toLowerCase()
    .replace(/\s+/g,' ')
    .replace(/[\._]/g,' ')
    .replace(/[^a-z0-9 ]/g,'');
}

// pick best matching field from row given candidate variants
function bestField(row, variants){
  const normMap = {};
  for (const key of Object.keys(row || {})) normMap[normKey(key)] = key;
  for (const v of variants){
    const nk = normKey(v);
    if(normMap[nk]) return row[normMap[nk]];
  }
  // fallback: check if any normalized row key equals any normalized variant
  for (const key of Object.keys(row || {})){
    if(variants.map(v=>normKey(v)).includes(normKey(key))) return row[key];
  }
  return undefined;
}

// try convert Excel serial to JS Date (time only)
// try convert Excel serial to JS Date (handles date+time and time-only correctly)
function excelSerialToDate(serial){
  const n = Number(serial);
  if(isNaN(n)) return null;

  // If the serial represents a time-only value (fractional day < 1),
  // anchor it at 1970-01-01 using UTC so local timezone won't shift the time.
  if(Math.abs(n) < 1){
    const totalSeconds = Math.round(n * 86400);
    const hh = Math.floor(totalSeconds / 3600);
    const mm = Math.floor((totalSeconds % 3600) / 60);
    const ss = totalSeconds % 60;
    // Create a UTC date at 1970-01-01 with that time (prevents timezone offset surprises).
    return new Date(Date.UTC(1970,0,1, hh, mm, ss));
  }

  // Excel's day 0 is 1899-12-30 (Excel leap-year bug included by using 1899-12-30).
  // Compute milliseconds from that epoch in UTC and return a JS Date for that instant.
  const excelEpochUtc = Date.UTC(1899, 11, 30); // 1899-12-30 UTC
  const days = Math.floor(n);
  const frac = n - days;
  const dayMs = days * 86400 * 1000;
  const fracMs = Math.round(frac * 86400 * 1000);
  const utcMs = excelEpochUtc + dayMs + fracMs;
  return new Date(utcMs);
}


// parse many time/date formats to Date object (time anchored at given date or 1970-01-01)
function parseTime(value){
  if(value === undefined || value === null || value === '') return null;

  // if number-like -> maybe Excel serial
  if(typeof value === 'number' || (!isNaN(value) && String(value).trim() !== '')){
    const maybe = excelSerialToDate(value);
    if(maybe && !isNaN(maybe)) return maybe;
  }

  let v = String(value).trim();
  if(!v) return null;

  // convert "25-11-2025 15.09" -> "2025-11-25 15:09"
  // replace dots in time -> colons
  v = v.replace(/\.(?=\d{1,2}\b)/g, ':');

  // normalize dmy to iso-like yyyy-mm-dd if pattern matches dd-mm-yyyy or dd/mm/yyyy
  v = v.replace(/(\b\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/, function(_, d,m,y){
    if(y.length === 2) y = '20' + y;
    return y + '-' + m.padStart(2,'0') + '-' + d.padStart(2,'0');
  });

  // try Date constructor first (handles ISO and "2025-11-25 15:09:22")
  const d1 = new Date(v);
  if(!isNaN(d1)) return d1;

  // if only time present like "15:09" or "3:05 PM"
  const tmatch = v.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(am|pm)?/i);
  if(tmatch){
    let hh = parseInt(tmatch[1],10);
    const mm = parseInt(tmatch[2],10);
    const ss = tmatch[3] ? parseInt(tmatch[3],10) : 0;
    const ampm = tmatch[4];
    if(ampm){
      const ap = ampm.toLowerCase();
      if(ap === 'pm' && hh < 12) hh += 12;
      if(ap === 'am' && hh === 12) hh = 0;
    }
    return new Date(1970,0,1,hh,mm,ss);
  }

  return null;
}

function diffHours(a,b){
  if(!(a instanceof Date) || !(b instanceof Date)) return null;
  let diff = b - a;
  if(diff < 0) diff += 24*3600*1000; // overnight adjustment
  return diff / 3600000;
}

function hoursToHHMM(decimal){
  if(decimal === null || decimal === undefined || isNaN(decimal)) return '';
  const totalMinutes = Math.round(decimal * 60);
  const hh = Math.floor(totalMinutes / 60);
  const mm = totalMinutes % 60;
  return String(hh).padStart(2,'0') + ':' + String(mm).padStart(2,'0');
}

// new helper: format Date to readable DD-MM-YYYY or DD-MM-YYYY HH:MM:SS
function formatReadableDate(dt){
  if(!(dt instanceof Date) || isNaN(dt)) return '';
  const yy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2,'0');
  const dd = String(dt.getDate()).padStart(2,'0');
  const hh = String(dt.getHours()).padStart(2,'0');
  const min = String(dt.getMinutes()).padStart(2,'0');
  const ss = String(dt.getSeconds()).padStart(2,'0');
  // if time is 00:00:00, show date only; otherwise include time
  if(hh === '00' && min === '00' && ss === '00'){
    return `${dd}-${mm}-${yy}`;
  } else {
    return `${dd}-${mm}-${yy} ${hh}:${min}:${ss}`;
  }
}

// read & aggregate rows
function readAndProcessRows(rows){
  if(!Array.isArray(rows)) return [];

  const hubKeys = ['hub name','hub','store','hubcode'];
  const nameKeys = ['worker name','worker','rider name','rider','worker code','worker id','employee'];
  const dateKeys = ['work date','workdate','date','shift date','workdate'];

  const inKeys = [
    'check-in','check in','check-in time','check in time','checkin','checkin time',
    'login','login time','start time','clock in','first check in'
  ];
  const outKeys = [
    'check-out','check out','check-out time','check out time','checkout','checkout time',
    'logout','logout time','end time','clock out','last check out'
  ];

  // NEW: Only 12 allowed stores (normalized for matching)
  const allowedHubs = [
    "Kalyan Nagar_mnow",
    "Basaweshwar Nagar Mnow",
    "Jakkur_mnow",
    "Begur Mnow",
    "Thyagaraja Nagar_mnow",
    "Brookfield_mnow",
    "JP nagar Mnow",
    "Sarjapur road Mnow",
    "Manikonda_mnow",
    "Gachibowli_mnow",
    "Attapur_mnow",
    "Nizampet_mnow"
  ];
  const allowedSet = new Set(allowedHubs.map(h => normKey(h)));

  const map = new Map(); // key = name + '~~' + dateOnly (normalized)

  rows.forEach(row => {
    const hub  = bestField(row, hubKeys);
    const name = bestField(row, nameKeys);
    const dateVal = bestField(row, dateKeys);
    const inVal = bestField(row, inKeys);
    const outVal = bestField(row, outKeys);

    // NEW: Filter by allowed hubs only
    const hubName = hub ? String(hub).trim() : '';
    if(!hubName) return; // skip if hub not present
    if(!allowedSet.has(normKey(hubName))) return; // skip if hub not in allowed list

    // if no name, try to use worker code or some uniquely identifying field in row
    let fallbackCode = null;
    if(!name){
      // look for Worker Code-like fields
      const code = bestField(row, ['worker code','workerid','worker id','code','id']);
      if(code) {
        fallbackCode = code;
      } else return; // nothing to identify this row
    }

    const nameKey = String(name || fallbackCode || '').trim();

    // ---- parse and format date, and use date-only normalized string for grouping key ----
    const parsedDate = parseTime(dateVal);
    let formattedDate = '';
    let formattedDateOnly = '';
    if(parsedDate && !isNaN(parsedDate)){
      // use readable format DD-MM-YYYY or DD-MM-YYYY HH:MM:SS
      formattedDate = formatReadableDate(parsedDate);
      // date-only (for grouping) — always DD-MM-YYYY
      const yy = parsedDate.getFullYear();
      const mm = String(parsedDate.getMonth() + 1).padStart(2,'0');
      const dd = String(parsedDate.getDate()).padStart(2,'0');
      formattedDateOnly = `${dd}-${mm}-${yy}`;
    } else {
      // fallback to raw string if parsing failed
      formattedDate = String(dateVal || '').trim();
      formattedDateOnly = formattedDate;
    }
    // ----------------------------------------------------------------------------------------

    const key = (nameKey + '~~' + formattedDateOnly).toLowerCase();

    const inDt = parseTime(inVal);
    const outDt = parseTime(outVal);

    if(!map.has(key)){
      map.set(key, {
        hub: hubName || '',
        name: nameKey || '',
        date: formattedDate || '',
        inDt: inDt || null,
        outDt: outDt || null,
        rawRow: row
      });
    } else {
      const cur = map.get(key);
      if(inDt && (!cur.inDt || inDt < cur.inDt)) cur.inDt = inDt;
      if(outDt && (!cur.outDt || outDt > cur.outDt)) cur.outDt = outDt;
    }
  });

  const out = [];
  for(const item of map.values()){
    const hrs = (item.inDt && item.outDt) ? diffHours(item.inDt, item.outDt) : null;
    out.push({
      hub: item.hub || '',
      name: item.name || '',
      date: item.date || '',
      inTime: item.inDt ? item.inDt.toTimeString().slice(0,8) : '',
      outTime: item.outDt ? item.outDt.toTimeString().slice(0,8) : '',
      hoursDecimal: hrs,
      workTime: hrs ? hoursToHHMM(hrs) : 'NA'
    });
  }

  return out;
}

// render table
function renderTable(data){
  const tbody = document.querySelector('#dataTable tbody');
  if(!tbody) return;
  tbody.innerHTML = '';

  if(!data || !data.length){
    tbody.innerHTML = '<tr><td colspan="6">No entries</td></tr>';
    return;
  }

  data.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(r.hub)}</td>
      <td>${escapeHtml(r.name)}</td>
      <td>${escapeHtml(r.date)}</td>
      <td>${escapeHtml(r.inTime)}</td>
      <td>${escapeHtml(r.outTime)}</td>
      <td>${escapeHtml(r.workTime)}</td>
    `;
    tbody.appendChild(tr);
  });
}

// small HTML escape for safety
function escapeHtml(s){
  if(s === undefined || s === null) return '';
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

// ---------------- EVENTS ----------------
document.addEventListener('DOMContentLoaded', ()=>{

  const fileInput = document.getElementById('fileInput');
  const submitBtn = document.getElementById('submitBtn');
  const searchBox = document.getElementById('searchBox');
  const downloadBtn = document.getElementById('downloadBtn');

  let riderData = [];

  function safeLower(s){ return (s || '').toString().toLowerCase(); }

  submitBtn.addEventListener('click', ()=>{
    const f = fileInput.files && fileInput.files[0];
    if(!f) return alert('Upload a file first');

    const reader = new FileReader();
    reader.onload = e => {
      try{
        const isCSV = f.name.toLowerCase().endsWith('.csv');
        const wb = isCSV
          ? XLSX.read(e.target.result, {type:'string'})
          : XLSX.read(new Uint8Array(e.target.result), {type:'array'});
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, {raw:true, defval:''});
        riderData = readAndProcessRows(rows);
        renderTable(riderData);
      } catch(err){
        console.error(err);
        alert('Error parsing file. Check file format and headers.');
      }
    };

    if(f.name.toLowerCase().endsWith('.csv')) reader.readAsText(f);
    else reader.readAsArrayBuffer(f);
  });

  // improved search: matches across multiple columns, safe when fields missing
  searchBox.addEventListener('input', function(){
    const q = (this.value || '').trim().toLowerCase();
    if(!q){
      renderTable(riderData);
      return;
    }
    const results = riderData.filter(r => {
      // match name, hub, date, inTime, outTime, and also worker code if present inside name
      return safeLower(r.name).includes(q)
          || safeLower(r.hub).includes(q)
          || safeLower(r.date).includes(q)
          || safeLower(r.inTime).includes(q)
          || safeLower(r.outTime).includes(q);
    });
    renderTable(results);
  });

  // download current (filtered) view OR full dataset (we export full dataset for simplicity)
  downloadBtn.addEventListener('click', ()=>{
    if(!riderData || !riderData.length) return alert('No data to download');
    // produce friendly export fields
    const exportRows = riderData.map(r => ({
      Hub: r.hub,
      Worker: r.name,
      Date: r.date,
      CheckIn: r.inTime,
      CheckOut: r.outTime,
      WorkingTime: r.workTime
    }));
    const ws = XLSX.utils.json_to_sheet(exportRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Report');
    XLSX.writeFile(wb, 'Rider_Report.xlsx');
  });

});
