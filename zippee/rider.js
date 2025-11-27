/* --------------------------------------------------------------------------
 * Rider counter 1.2 – Talkie Talkie 🛵
 * -------------------------------------------------------------------------- */

let riderDataRows = [];

/* ---------- helpers ------------------------------------------------------ */
const clean = v => (v === undefined || v === null) ? '' : String(v).trim();

/* ---------- file upload -------------------------------------------------- */
document.getElementById('riderSubmitBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('riderFileInput');
  const file      = fileInput.files[0];

  if (!file) {
    alert('Please select an Excel or CSV file.');
    return;
  }

  const reader = new FileReader();

  reader.onload = e => {
    const rawData  = e.target.result;
    const workbook = file.name.match(/\.csv$/i)
      ? XLSX.read(rawData,            { type: 'string', raw: true })       // CSV
      : XLSX.read(new Uint8Array(rawData), { type: 'array',  raw: true }); // XLS/XLSX

    const sheet   = workbook.Sheets[workbook.SheetNames[0]];
    const rows    = XLSX.utils.sheet_to_json(sheet, { raw: false });

    /* ---------- aggregation --------------------------------------------- */
    const storeMap = new Map();               // Map<store, Set<worker>>
    rows.forEach(r => {
      const store = clean(r['Hub Name']);
      const code  = clean(r['Worker Code']);
      if (!store || !code) return;            // skip blanks

      if (!storeMap.has(store)) storeMap.set(store, new Set());
      storeMap.get(store).add(code);
    });

    riderDataRows = Array.from(storeMap, ([store, set]) =>
      ({ store, count: set.size }) );

    // alpha‑sort by store (case‑insensitive)
    riderDataRows.sort((a, b) =>
      a.store.localeCompare(b.store, undefined, { sensitivity: 'base' })
    );

    // Only keep the 8 required stores
    const allowedStores = [
      'Kalyan Nagar_mnow',  
      'Basaveshwar Nagar_mnow',
      'Jakkur_mnow',
      'Begur_mnow',
      'Thyagaraja Nagar_mnow',
      'Brookfield_mnow',
      'JP nagar_mnow',
      'Brookfield_mnow',
      'Sarjapur Road_mnow',
      'Manikonda_mnow',
      'Gachibowli_mnow',
      'Attapur_mnow',
      'Nizampet_mnow'

    ];
    const i=0;
    // USer want to the count
    riderDataRows = riderDataRows.filter(r => 
       allowedStores.includes(r.store));

    renderRiderTable(riderDataRows);
  };

  if (file.name.match(/\.csv$/i)) reader.readAsText(file);
  else                            reader.readAsArrayBuffer(file);
});

/* ---------- rendering ---------------------------------------------------- */
function renderRiderTable(data) {
  const tbody = document.querySelector('#riderTable tbody');
  tbody.innerHTML = '';

  if (!data.length) {
    tbody.innerHTML = '<tr><td colspan="2">No data found.</td></tr>';
    return;
  }

  let grandTotal = 0;
  data.forEach(({ store, count }) => {
    grandTotal += count;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${store}</td><td>${count}</td>`;
    tbody.appendChild(tr);
  });

  // OPTIONAL grand total
  const totalRow = document.createElement('tr');
  totalRow.innerHTML =
    `<th style="text-align:right;">Grand&nbsp;Total</th><th>${grandTotal}</th>`;
  tbody.appendChild(totalRow);
}

/* ---------- instant search ---------------------------------------------- */
document.getElementById('riderSearch').addEventListener('input', function () {
  const q = this.value.trim().toLowerCase();
  const filtered = riderDataRows.filter(r =>
    r.store.toLowerCase().includes(q)
  );
  renderRiderTable(filtered);
});
