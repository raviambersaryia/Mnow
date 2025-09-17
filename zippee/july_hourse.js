function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}



const reportData = [
    {
        day: "Friday",
    date: "8/1/2025",
        stores: {
            "Kalyan nagar Mnow": 689,
            "Basaweshwar Nagar Mnow": 406,
            "Jakkur Mnow": 266,
            "Begur Mnow": 780,
            "Thyagaraja Nagar Mnow": 534,
            "Brookfield Mnow": 867,
            "JP nagar Mnow": 646,
            "Sarjapur road Mnow": 629,
        },
        total: 4817,
    },
    {
        day: "Saturday",
    date: "8/2/2025",
        stores: {
            "Kalyan nagar Mnow": 727,
            "Basaweshwar Nagar Mnow": 428,
            "Jakkur Mnow": 281,
            "Begur Mnow": 823,
            "Thyagaraja Nagar Mnow": 563,
            "Brookfield Mnow": 914,
            "JP nagar Mnow": 681,
            "Sarjapur road Mnow": 663,
        },
        total: 5080,
    },
    {
        day: "Sunday",
    date: "8/3/2025",
        stores: {
            "Kalyan nagar Mnow": 665,
            "Basaweshwar Nagar Mnow": 391,
            "Jakkur Mnow": 257,
            "Begur Mnow": 753,
            "Thyagaraja Nagar Mnow": 515,
            "Brookfield Mnow": 836,
            "JP nagar Mnow": 623,
            "Sarjapur road Mnow": 607,
        },
        total: 4648,
    },
    {
        day: "Monday",
    date: "8/4/2025",
        stores: {
            "Kalyan nagar Mnow": 372,
            "Basaweshwar Nagar Mnow": 219,
            "Jakkur Mnow": 144,
            "Begur Mnow": 422,
            "Thyagaraja Nagar Mnow": 288,
            "Brookfield Mnow": 468,
            "JP nagar Mnow": 349,
            "Sarjapur road Mnow": 339,
        },
        total: 2601,
    },
    {
        day: "Tuesday",
    date: "8/5/2025",
        stores: {
            "Kalyan nagar Mnow": 440,
            "Basaweshwar Nagar Mnow": 249,
            "Jakkur Mnow": 170,
            "Begur Mnow": 498,
            "Thyagaraja Nagar Mnow": 341,
            "Brookfield Mnow": 553,
            "JP nagar Mnow": 412,
            "Sarjapur road Mnow": 401,
        },
        total: 3074,
    },
    {
        day: "Wednesday",
    date: "8/6/2025",
        stores: {
            "Kalyan nagar Mnow": 544,
            "Basaweshwar Nagar Mnow": 320,
            "Jakkur Mnow": 210,
            "Begur Mnow": 616,
            "Thyagaraja Nagar Mnow": 422,
            "Brookfield Mnow": 684,
            "JP nagar Mnow": 510,
            "Sarjapur road Mnow": 496,
        },
        total: 3802,
    },
    {
        day: "Thursday",
    date: "8/7/2025",
        stores: {
            "Kalyan nagar Mnow": 572,
            "Basaweshwar Nagar Mnow": 337,
            "Jakkur Mnow": 221,
            "Begur Mnow": 648,
            "Thyagaraja Nagar Mnow": 444,
            "Brookfield Mnow": 720,
            "JP nagar Mnow": 536,
            "Sarjapur road Mnow": 522,
        },
        total: 4000,
    },
    {
        day: "Friday",
    date: "8/8/2025",
        stores: {
            "Kalyan nagar Mnow": 519,
            "Basaweshwar Nagar Mnow": 306,
            "Jakkur Mnow": 201,
            "Begur Mnow": 588,
            "Thyagaraja Nagar Mnow": 402,
            "Brookfield Mnow": 653,
            "JP nagar Mnow": 486,
            "Sarjapur road Mnow": 474,
        },
        total: 3629,
    },
    {
        day: "Saturday",
    date: "8/9/2025",
        stores: {
            "Kalyan nagar Mnow": 561,
            "Basaweshwar Nagar Mnow": 331,
            "Jakkur Mnow": 216,
            "Begur Mnow": 635,
            "Thyagaraja Nagar Mnow": 434,
            "Brookfield Mnow": 706,
            "JP nagar Mnow": 525,
            "Sarjapur road Mnow": 512,
        },
        total: 3920,
    },
    {
        day: "Sunday",
    date: "8/10/2025",
        stores: {
            "Kalyan nagar Mnow": 568,
            "Basaweshwar Nagar Mnow": 335,
            "Jakkur Mnow": 219,
            "Begur Mnow": 643,
            "Thyagaraja Nagar Mnow": 440,
            "Brookfield Mnow": 715,
            "JP nagar Mnow": 532,
            "Sarjapur road Mnow": 519,
        },
        total: 3971,
    },
    {
        day: "Monday",
    date: "8/11/2025",
        stores: {
            "Kalyan nagar Mnow": 389,
            "Basaweshwar Nagar Mnow": 245,
            "Jakkur Mnow": 210,
            "Begur Mnow": 449,
            "Thyagaraja Nagar Mnow": 341,
            "Brookfield Mnow": 775,
            "JP nagar Mnow": 411,
            "Sarjapur road Mnow": 419,
        },
        total: 3308,
    },
    {
        day: "Tuesday",
    date: "8/12/2025",
        stores: {
            "Kalyan nagar Mnow": 409,
            "Basaweshwar Nagar Mnow": 258,
            "Jakkur Mnow": 220,
            "Begur Mnow": 472,
            "Thyagaraja Nagar Mnow": 359,
            "Brookfield Mnow": 873,
            "JP nagar Mnow": 432,
            "Sarjapur road Mnow": 441,
        },
        total: 3464,
    },
    {
        day: "Wednesday",
    date: "8/13/2025",
        stores: {
            "Kalyan nagar Mnow": 399,
            "Basaweshwar Nagar Mnow": 251,
            "Jakkur Mnow": 215,
            "Begur Mnow": 460,
            "Thyagaraja Nagar Mnow": 350,
            "Brookfield Mnow": 859,
            "JP nagar Mnow": 422,
            "Sarjapur road Mnow": 440,
        },
        total: 3386,
    },
    {
        day: "Thursday",
    date: "8/14/2025",
        stores: {
            "Kalyan nagar Mnow": 468,
            "Basaweshwar Nagar Mnow": 295,
            "Jakkur Mnow": 225,
            "Begur Mnow": 541,
            "Thyagaraja Nagar Mnow": 411,
            "Brookfield Mnow": 959,
            "JP nagar Mnow": 495,
            "Sarjapur road Mnow": 505,
        },
        total: 3926,
    },
    {
        day: "Friday",
    date: "8/15/2025",
        stores: {
            "Kalyan nagar Mnow": 489,
            "Basaweshwar Nagar Mnow": 309,
            "Jakkur Mnow": 264,
            "Begur Mnow": 565,
            "Thyagaraja Nagar Mnow": 430,
            "Brookfield Mnow": 990,
            "JP nagar Mnow": 518,
            "Sarjapur road Mnow": 528,
        },
        total: 4093,
    },
    {
        day: "Saturday",
    date: "8/16/2025",
        stores: {
            "Kalyan nagar Mnow": 500,
            "Basaweshwar Nagar Mnow": 315.4,
            "Jakkur Mnow": 270,
            "Begur Mnow": 577,
            "Thyagaraja Nagar Mnow": 439,
            "Brookfield Mnow": 939,
            "JP nagar Mnow": 529,
            "Sarjapur road Mnow": 539,
        },
        total: 4159.1,
    },
    {
        day: "Sunday",
    date: "8/17/2025",
        stores: {
            "Kalyan nagar Mnow": 449,
            "Basaweshwar Nagar Mnow": 284.05,
            "Jakkur Mnow": 242,
            "Begur Mnow": 519,
            "Thyagaraja Nagar Mnow": 395,
            "Brookfield Mnow": 919,
            "JP nagar Mnow": 476,
            "Sarjapur road Mnow": 485,
        },
        total: 3768.65,
    },
    {
        day: "Monday",
    date: "8/18/2025",
        stores: {
            "Kalyan nagar Mnow": 346,
            "Basaweshwar Nagar Mnow": 217.55,
            "Jakkur Mnow": 186,
            "Begur Mnow": 399,
            "Thyagaraja Nagar Mnow": 304,
            "Brookfield Mnow": 768,
            "JP nagar Mnow": 366,
            "Sarjapur road Mnow": 372,
        },
        total: 2958.3,
    },
    {
        day: "Tuesday",
    date: "8/19/2025",
        stores: {
            "Kalyan nagar Mnow": 379,
            "Basaweshwar Nagar Mnow": 239.4,
            "Jakkur Mnow": 204,
            "Begur Mnow": 438,
            "Thyagaraja Nagar Mnow": 333,
            "Brookfield Mnow": 817,
            "JP nagar Mnow": 402,
            "Sarjapur road Mnow": 409,
        },
        total: 3221.45,
    },
    {
        day: "Wednesday",
    date: "8/20/2025",
        stores: {
            "Kalyan nagar Mnow": 410,
            "Basaweshwar Nagar Mnow": 258.4,
            "Jakkur Mnow": 221,
            "Begur Mnow": 474,
            "Thyagaraja Nagar Mnow": 474,
            "Brookfield Mnow": 862,
            "JP nagar Mnow": 434,
            "Sarjapur road Mnow": 442,
        },
        total: 3461.8,
    },
    {
        day: "Thursday",
    date: "8/21/2025",
        stores: {
            "Kalyan nagar Mnow": 439,
            "Basaweshwar Nagar Mnow": 276.45,
            "Jakkur Mnow": 237,
            "Begur Mnow": 506,
            "Thyagaraja Nagar Mnow": 506,
            "Brookfield Mnow": 929,
            "JP nagar Mnow": 463,
            "Sarjapur road Mnow": 493,
        },
        total: 3684.1,
    },
    {
        day: "Friday",
    date: "8/22/2025",
        stores: {
            "Kalyan nagar Mnow": 457,
            "Basaweshwar Nagar Mnow": 288.8,
            "Jakkur Mnow": 246,
            "Begur Mnow": 528,
            "Thyagaraja Nagar Mnow": 567,
            "Brookfield Mnow": 979,
            "JP nagar Mnow": 484,
            "Sarjapur road Mnow": 493,
        },
        total: 3827.55,
    },
    {
        day: "Saturday",
    date: "8/23/2025",
        stores: {
            "Kalyan nagar Mnow": 491,
            "Basaweshwar Nagar Mnow": 309.7,
            "Jakkur Mnow": 246,
            "Begur Mnow": 567,
            "Thyagaraja Nagar Mnow": 431,
            "Brookfield Mnow": 979,
            "JP nagar Mnow": 520,
            "Sarjapur road Mnow": 529,
        },
        total: 4090.7,
    },
    {
        day: "Sunday",
    date: "8/24/2025",
        stores: {
            "Kalyan nagar Mnow": 483,
            "Basaweshwar Nagar Mnow": 304.95,
            "Jakkur Mnow": 260,
            "Begur Mnow": 558,
            "Thyagaraja Nagar Mnow": 425,
            "Brookfield Mnow": 967,
            "JP nagar Mnow": 511,
            "Sarjapur road Mnow": 521,
        },
        total: 4028.95,
    },
    {
        day: "Monday",
    date: "8/25/2025",
        stores: {
            "Kalyan nagar Mnow": 424,
            "Basaweshwar Nagar Mnow": 266.95,
            "Jakkur Mnow": 228,
            "Begur Mnow": 489,
            "Thyagaraja Nagar Mnow": 372,
            "Brookfield Mnow": 881,
            "JP nagar Mnow": 448,
            "Sarjapur road Mnow": 457,
        },
        total: 3566.3,
    },
    {
        day: "Tuesday",
    date: "8/26/2025",
        stores: {
            "Kalyan nagar Mnow": 492,
            "Basaweshwar Nagar Mnow": 310.65,
            "Jakkur Mnow": 265,
            "Begur Mnow": 568,
            "Thyagaraja Nagar Mnow": 432,
            "Brookfield Mnow": 979,
            "JP nagar Mnow": 521,
            "Sarjapur road Mnow": 530,
        },
        total: 4098.3,
    },
    {
        day: "Wednesday",
    date: "8/27/2025",
        stores: {
            "Kalyan nagar Mnow": 489,
            "Basaweshwar Nagar Mnow": 308.75,
            "Jakkur Mnow": 264,
            "Begur Mnow": 565,
            "Thyagaraja Nagar Mnow": 429,
            "Brookfield Mnow": 976,
            "JP nagar Mnow": 518,
            "Sarjapur road Mnow": 527,
        },
        total: 4077.4,
    },
    {
        day: "Thursday",
    date: "8/28/2025",
        stores: {
            "Kalyan nagar Mnow": 484,
            "Basaweshwar Nagar Mnow": 304.95,
            "Jakkur Mnow": 260,
            "Begur Mnow": 559,
            "Thyagaraja Nagar Mnow": 425,
            "Brookfield Mnow": 968,
            "JP nagar Mnow": 512,
            "Sarjapur road Mnow": 522,
        },
        total: 4033.7,
    },
    {
        day: "Friday",
    date: "8/29/2025",
        stores: {
            "Kalyan nagar Mnow": 505,
            "Basaweshwar Nagar Mnow": 319.2,
            "Jakkur Mnow": 273,
            "Begur Mnow": 584,
            "Thyagaraja Nagar Mnow": 445,
            "Brookfield Mnow": 999,
            "JP nagar Mnow": 535,
            "Sarjapur road Mnow": 545,
        },
        total: 4205.65,
    },
    {
        day: "Saturday",
    date: "8/30/2025",
        stores: {
            "Kalyan nagar Mnow": 557,
            "Basaweshwar Nagar Mnow": 351.5,
            "Jakkur Mnow": 300,
            "Begur Mnow": 643,
            "Thyagaraja Nagar Mnow": 489,
            "Brookfield Mnow": 1074,
            "JP nagar Mnow": 589,
            "Sarjapur road Mnow": 600,
        },
        total: 4603.7,
    },
    {
        day: "Sunday",
    date: "8/31/2025",
        stores: {
            "Kalyan nagar Mnow": 590,
            "Basaweshwar Nagar Mnow": 372.4,
            "Jakkur Mnow": 318,
            "Begur Mnow": 681,
            "Thyagaraja Nagar Mnow": 519,
            "Brookfield Mnow": 1122,
            "JP nagar Mnow": 625,
            "Sarjapur road Mnow": 637,
        },
        total: 4864,
    },
];



// we add the new hour percentages data here

const hourPercentages = [
  { hour: "6-7 AM", Sunday: 1.00, Monday: 1.00, Tuesday: 1.00, Wednesday: 1.00, Thursday: 1.00, Friday: 1.00, Saturday: 1.00 },
  { hour: "7-8 AM", Sunday: 2.50, Monday: 3.00, Tuesday: 2.00, Wednesday: 2.00, Thursday: 2.50, Friday: 2.50, Saturday: 3.00 },
  { hour: "8-9 AM", Sunday: 6.40, Monday: 7.10, Tuesday: 7.50, Wednesday: 6.80, Thursday: 7.80, Friday: 8.10, Saturday: 7.10 },
  { hour: "9-10 AM", Sunday: 12.00, Monday: 13.20, Tuesday: 13.10, Wednesday: 13.50, Thursday: 14.00, Friday: 15.00, Saturday: 13.50 },
  { hour: "10-11 AM", Sunday: 19.10, Monday: 19.10, Tuesday: 20.10, Wednesday: 20.90, Thursday: 20.90, Friday: 22.30, Saturday: 20.70 },
  { hour: "11-12 PM", Sunday: 27.70, Monday: 25.40, Tuesday: 27.30, Wednesday: 28.00, Thursday: 28.10, Friday: 30.00, Saturday: 28.10 },
  { hour: "12-1 PM", Sunday: 35.60, Monday: 32.30, Tuesday: 34.00, Wednesday: 35.10, Thursday: 35.00, Friday: 36.90, Saturday: 35.70 },
  { hour: "1-2 PM", Sunday: 43.20, Monday: 39.40, Tuesday: 40.20, Wednesday: 41.40, Thursday: 40.90, Friday: 42.80, Saturday: 43.20 },
  { hour: "2-3 PM", Sunday: 50.00, Monday: 45.30, Tuesday: 47.00, Wednesday: 46.80, Thursday: 46.90, Friday: 48.80, Saturday: 49.60 },
  { hour: "3-4 PM", Sunday: 56.70, Monday: 51.90, Tuesday: 53.50, Wednesday: 52.40, Thursday: 52.80, Friday: 55.60, Saturday: 57.30 },
  { hour: "4-5 PM", Sunday: 63.10, Monday: 59.40, Tuesday: 59.60, Wednesday: 59.10, Thursday: 59.30, Friday: 62.10, Saturday: 64.10 },
  { hour: "5-6 PM", Sunday: 70.50, Monday: 67.20, Tuesday: 66.40, Wednesday: 62.00, Thursday: 65.70, Friday: 69.10, Saturday: 70.70 },
  { hour: "6-7 PM", Sunday: 77.20, Monday: 74.40, Tuesday: 73.40, Wednesday: 76.80, Thursday: 73.00, Friday: 75.40, Saturday: 77.60 },
  { hour: "7-8 PM", Sunday: 83.70, Monday: 81.80, Tuesday: 81.40, Wednesday: 80.30, Thursday: 80.70, Friday: 82.90, Saturday: 84.00 },
  { hour: "8-9 PM", Sunday: 88.80, Monday: 89.10, Tuesday: 89.30, Wednesday: 88.20, Thursday: 88.10, Friday: 90.00, Saturday: 89.20 },
  { hour: "9-10 PM", Sunday: 94.50, Monday: 95.50, Tuesday: 96.00, Wednesday: 95.10, Thursday: 95.30, Friday: 95.40, Saturday: 94.30 },
  { hour: "10-11 PM", Sunday: 100.00, Monday: 100.20, Tuesday: 99.90, Wednesday: 100.00, Thursday: 99.70, Friday: 100.00, Saturday: 99.80 }
];



// Helper to get the current day name
function getDayName(date) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
}

// Helper to get the percentage for the current hour and day
function getCurrentHourPercentage() {
  const now = new Date();
  const hour = now.getHours();
  const dayName = getDayName(now);

  // Map JS hour to your table row (6-7 AM is 6, 7-8 AM is 7, ..., 9-10 PM is 21)
  // Find the closest hour row that is <= current hour
  let rowIdx = hour - 6;
  if (rowIdx < 0) rowIdx = 0;
  if (rowIdx >= hourPercentages.length) rowIdx = hourPercentages.length - 1;

  return {
    label: hourPercentages[rowIdx].hour,
    percent: hourPercentages[rowIdx][dayName]
  };
}

// Helper to get the percentage for any day and hour
function getHourPercentageFor(dayName, hour) {
  let rowIdx = hour - 6;
  if (rowIdx < 0) rowIdx = 0;
  if (rowIdx >= hourPercentages.length) rowIdx = hourPercentages.length - 1;
  return {
    label: hourPercentages[rowIdx].hour,
    percent: hourPercentages[rowIdx][dayName]
  };
}

function generateSummaryTable() {
  const tableBody = document.querySelector('#reportTable tbody');
  tableBody.innerHTML = '';

  // Find the entry for today (if exists)
  const todayDate = getTodayDateString();
  const todayData = reportData.find(d => d.date === todayDate);
  const latestData = todayData || reportData[reportData.length - 1];
  const storeNames = Object.keys(latestData.stores);

  // Get current hour percentage info
  const now = new Date();
  const hourInfo = getHourPercentageFor(getDayName(now), now.getHours());

  // Update the column header
  document.getElementById('tillHour').textContent = hourInfo.label;

  let totalCurrent = 0;
  let totalProjected = 0;
  let totalBuffer = 0;

  storeNames.forEach(store => {
    const tr = document.createElement('tr');
    const tdStore = document.createElement('td');
    tdStore.textContent = store;
    tr.appendChild(tdStore);

    // Projected Orders on current date (full day)
    const fullDayOrders = latestData.stores[store];
    const tdCurrent = document.createElement('td');
    tdCurrent.textContent = fullDayOrders;
    tr.appendChild(tdCurrent);

    // Projected Orders till current hour (using percentage)
    // This is the Excel logic: =C5*'June Projection'!$D$33
    const projected = Math.round(fullDayOrders * (hourInfo.percent / 100));
    const tdProjected = document.createElement('td');
    tdProjected.textContent = projected;
    tr.appendChild(tdProjected);

    // Projected Orders with 15% buffer
    const bufferValue = Math.round(projected * 1.15);
    const tdBuffer = document.createElement('td');
    tdBuffer.textContent = bufferValue;
    tr.appendChild(tdBuffer);

    tableBody.appendChild(tr);

    // Add to totals
    totalCurrent += fullDayOrders;
    totalProjected += projected;
    totalBuffer += bufferValue;
  });

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.style.fontWeight = 'bold';
  totalRow.style.background = '#ffe066';

  const tdTotalLabel = document.createElement('td');
  tdTotalLabel.textContent = 'Total';
  totalRow.appendChild(tdTotalLabel);

  const tdTotalCurrent = document.createElement('td');
  tdTotalCurrent.textContent = totalCurrent;
  totalRow.appendChild(tdTotalCurrent);

  const tdTotalProjected = document.createElement('td');
  tdTotalProjected.textContent = totalProjected;
  totalRow.appendChild(tdTotalProjected);

  const tdTotalBuffer = document.createElement('td');
  tdTotalBuffer.textContent = totalBuffer;
  totalRow.appendChild(tdTotalBuffer);

  tableBody.appendChild(totalRow);
}

function generateFilteredTableForSearch(dateStr, timeStr) {
  const tableBody = document.querySelector('#reportTable tbody');
  tableBody.innerHTML = '';

  if (!dateStr) {
    tableBody.innerHTML = '<tr><td colspan="4">Please select a date.</td></tr>';
    return;
  }

  // Parse date and time
  const [year, month, day] = dateStr.split('-');
  const [hour = 0] = (timeStr || '00:00').split(':');
  const searchDate = new Date(year, month - 1, day);
  const searchHour = parseInt(hour, 10);

  // Get day name for the selected date
  const dayName = getDayName(searchDate);

  // Find the entry for the selected date (or latest before)
  const formattedDate = `${parseInt(month)}/${parseInt(day)}/${year}`;
  let dataIdx = reportData.findIndex(d => d.date === formattedDate);
  if (dataIdx === -1) {
    // If not found, use the latest before the date
    dataIdx = reportData.findIndex(d => {
      const [m, dNum, y] = d.date.split('/').map(Number);
      const entryDate = new Date(y, m - 1, dNum);
      return entryDate <= searchDate;
    });
    if (dataIdx === -1) {
      tableBody.innerHTML = '<tr><td colspan="4">No data found for the selected date.</td></tr>';
      return;
    }
  }
  const selectedData = reportData[dataIdx];
  const storeNames = Object.keys(selectedData.stores);

  // Get percentage for the selected day/hour
  const hourInfo = getHourPercentageFor(dayName, searchHour);

  // Update the column header
  document.getElementById('tillHour').textContent = hourInfo.label;

  let totalCurrent = 0;
  let totalProjected = 0;
  let totalBuffer = 0;

  storeNames.forEach(store => {
    const tr = document.createElement('tr');
    const tdStore = document.createElement('td');
    tdStore.textContent = store;
    tr.appendChild(tdStore);

    // Projected Orders on selected date (full day)
    const tdCurrent = document.createElement('td');
    tdCurrent.textContent = selectedData.stores[store];
    tr.appendChild(tdCurrent);

    // Projected Orders till selected hour (using percentage)
    const projected = Math.round(selectedData.stores[store] * (hourInfo.percent / 100));
    const tdProjected = document.createElement('td');
    tdProjected.textContent = projected;
    tr.appendChild(tdProjected);

    // Projected Orders with 15% buffer
    const bufferValue = Math.round(projected * 1.15);
    const tdBuffer = document.createElement('td');
    tdBuffer.textContent = bufferValue;
    tr.appendChild(tdBuffer);

    tableBody.appendChild(tr);

    // Add to totals
    totalCurrent += selectedData.stores[store];
    totalProjected += projected;
    totalBuffer += bufferValue;
  });

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.style.fontWeight = 'bold';
  totalRow.style.background = '#ffe066';

  const tdTotalLabel = document.createElement('td');
  tdTotalLabel.textContent = 'Total';
  totalRow.appendChild(tdTotalLabel);

  const tdTotalCurrent = document.createElement('td');
  tdTotalCurrent.textContent = totalCurrent;
  totalRow.appendChild(tdTotalCurrent);

  const tdTotalProjected = document.createElement('td');
  tdTotalProjected.textContent = totalProjected;
  totalRow.appendChild(tdTotalProjected);

  const tdTotalBuffer = document.createElement('td');
  tdTotalBuffer.textContent = totalBuffer;
  totalRow.appendChild(tdTotalBuffer);

  tableBody.appendChild(totalRow);
}

// Utility to get today's date in "M/D/YYYY" format
function getTodayDateString() {
  const today = new Date();
  return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
}

// Update the date in the header
function updateCurrentDateHeader() {
  const now = new Date();
  const formatted = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  const currentDateSpan = document.getElementById('currentDate');
  if (currentDateSpan) {
    currentDateSpan.textContent = formatted;
  }
}

// Update the time in the header
function updateDateTime() {
  const now = new Date();
  document.getElementById('datetime').textContent = now.toLocaleString();
}

document.addEventListener('DOMContentLoaded', () => {
  generateSummaryTable();
  updateCurrentDateHeader();
  updateDateTime();
  setInterval(() => {
    generateSummaryTable();
    updateCurrentDateHeader();
    updateDateTime();
  }, 60 * 1000); // update every minute

  // Update final table header to include Attempted Orders %
  const finalTableHeader = document.querySelector('#finalTable thead tr');
  if (finalTableHeader) {
    if (!Array.from(finalTableHeader.children).some(th => th.textContent.includes('Order Attainment'))) {
      const th1 = document.createElement('th');
      th1.textContent = 'Order Attainment %';
      finalTableHeader.appendChild(th1);
    }
    if (!Array.from(finalTableHeader.children).some(th => th.textContent.includes('Attempted Orders'))) {
      const th2 = document.createElement('th');
      th2.textContent = 'Attempted Orders %';
      finalTableHeader.appendChild(th2);
    }
  }
});

// Attach to your search button
document.getElementById('searchBtn').addEventListener('click', () => {
  const dateVal = document.getElementById('searchDate').value;
  const timeVal = document.getElementById('searchTime').value;
  generateFilteredTableForSearch(dateVal, timeVal);
});

document.getElementById("submitBtn").addEventListener("click", function () {
    processFile();
});

// --- BASE processFile DEFINITION ---
function processFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an Excel or CSV file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        let workbook;
        if (file.name.endsWith(".csv")) {
            workbook = XLSX.read(e.target.result, { type: "string" });
        } else {
            const data = new Uint8Array(e.target.result);
            workbook = XLSX.read(data, { type: "array" });
        }
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const fileData = XLSX.utils.sheet_to_json(sheet);
        // --- AGGREGATION LOGIC ---
        let storeOrders = {};
        let deliveredOrders = {};
        let attemptedOrders = {};
        let cancelledOrders = {};
        let deepPainOrders = {};
        const includedStores = [
            "Kalyan nagar", 
            "Basaweshwar Nagar Mnow", 
            "Jakkur Mnow", 
            "Begur Mnow", 
            "Thyagaraja Nagar Mnow", 
            "Brookfield Mnow", 
            "JP nagar Mnow", 
            "Sarjapur road Mnow"
        ];
        fileData.forEach(order => {
            let storeName = order["Store Name"] ? order["Store Name"].trim() : "Unknown Store";
            if (!includedStores.includes(storeName)) return;
            let status = order["Order Status"] ? order["Order Status"].trim().toLowerCase() : "";
            let breachStatus = order["Breached"] ? order["Breached"].trim().toLowerCase() : "no";
            let breachDuration = order["Breached Duration (In Min)"] ? parseFloat(order["Breached Duration (In Min)"]) : 5;
            storeOrders[storeName] = (storeOrders[storeName] || 0) + 1;
            if (status === "delivered") {
                deliveredOrders[storeName] = (deliveredOrders[storeName] || 0) + 1;
                if (breachStatus === "yes" && breachDuration > 15) {
                    deepPainOrders[storeName] = (deepPainOrders[storeName] || 0) + 1;
                }
            } else if (status === "attempted") {
                attemptedOrders[storeName] = (attemptedOrders[storeName] || 0) + 1;
            } else if (status.includes("cancel")) {
                cancelledOrders[storeName] = (cancelledOrders[storeName] || 0) + 1;
            }
        });
        // Show the summary table
        generateSummaryPage(storeOrders, deliveredOrders, attemptedOrders, cancelledOrders, {}, deepPainOrders);
    };
    if (file.name.endsWith(".csv")) {
        reader.readAsText(file);
    } else {
        reader.readAsArrayBuffer(file);
    }
}

// --- END BASE processFile ---

// --- DeepPain Orders Feature ---
// Declare at the top, before any function uses it
let deepPainOrderRows = [];

// Extract DeepPain orders from uploaded file (call this in processFile)
function extractDeepPainOrders(fileData) {
    deepPainOrderRows = [];
    fileData.forEach(order => {
        let breached = (order["Breached"] || "").toLowerCase();
        let breachedDuration = parseFloat(order["Breached Duration (In Min)"] || 0);
        let status = (order["Order Status"] || "").toLowerCase();
        // Deep Pain: delivered, breached=yes, breached duration > 15
        if (status === "delivered" && breached === "yes" && breachedDuration > 15) {
            deepPainOrderRows.push({
                orderNumber: order["Order Number"] || "",
                orderDate: order["Order Date"] || "",
                storeName: order["Store Name"] || "",
                breached: order["Breached"] || "",
                breachedDuration: order["Breached Duration (In Min)"] || "",
                deepPainStatus: "Deep Pain"
            });
        }
    });
}

// Show/hide DeepPain Orders section
if (document.getElementById("deepPainBtn")) {
    document.getElementById("deepPainBtn").addEventListener("click", function () {
        const section = document.getElementById("deepPainSection");
        if (!section) return;
        section.style.display = section.style.display === "none" ? "block" : "none";
        if (section.style.display === "block") {
            renderDeepPainTable(deepPainOrderRows);
        }
    });
}

// Render DeepPain Orders table
function renderDeepPainTable(data) {
    const tbody = document.querySelector("#deepPainTable tbody");
    if (!tbody) return;
    tbody.innerHTML = "";
    if (!data.length) {
        tbody.innerHTML = "<tr><td colspan='6'>No Deep Pain Orders found.</td></tr>";
        return;
    }
    data.forEach(row => {
        let orderDate = row.orderDate;
        // If orderDate is a number (Excel serial), convert it
        if (!isNaN(orderDate)) {
            orderDate = formatDate(excelDateToJSDate(Number(orderDate)));
        }
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.orderNumber}</td>
            <td>${orderDate}</td>
            <td>${row.storeName}</td>
            <td>${row.breached}</td>
            <td>${row.breachedDuration}</td>
            <td>${row.deepPainStatus}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Search/filter DeepPain Orders table
if (document.getElementById("deepPainSearch")) {
    document.getElementById("deepPainSearch").addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();
        const filtered = deepPainOrderRows.filter(row =>
            row.storeName.toLowerCase().includes(query) ||
            String(row.orderNumber).toLowerCase().includes(query)
        );
        renderDeepPainTable(filtered);
    });
}

// --- Patch processFile to call extractDeepPainOrders ---
const originalProcessFile = processFile;
processFile = function() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an Excel or CSV file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        let workbook;
        if (file.name.endsWith(".csv")) {
            workbook = XLSX.read(e.target.result, { type: "string" });
        } else {
            const data = new Uint8Array(e.target.result);
            workbook = XLSX.read(data, { type: "array" });
        }
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const fileData = XLSX.utils.sheet_to_json(sheet);
        // Extract DeepPain Orders for the table
        extractDeepPainOrders(fileData);
        // --- AGGREGATION LOGIC ---
        let storeOrders = {};
        let deliveredOrders = {};
        let attemptedOrders = {};
        let cancelledOrders = {};
        let deepPainOrders = {};
        const includedStores = [
            "Kalyan nagar", 
            "Basaweshwar Nagar Mnow", 
            "Jakkur Mnow", 
            "Begur Mnow", 
            "Thyagaraja Nagar Mnow", 
            "Brookfield Mnow", 
            "JP nagar Mnow", 
            "Sarjapur road Mnow"
        ];
        fileData.forEach(order => {
            let storeName = order["Store Name"] ? order["Store Name"].trim() : "Unknown Store";
            if (!includedStores.includes(storeName)) return;
            let status = order["Order Status"] ? order["Order Status"].trim().toLowerCase() : "";
            let breachStatus = order["Breached"] ? order["Breached"].trim().toLowerCase() : "no";
            let breachDuration = order["Breached Duration (In Min)"] ? parseFloat(order["Breached Duration (In Min)"]) : 5;
            storeOrders[storeName] = (storeOrders[storeName] || 0) + 1;
            if (status === "delivered") {
                deliveredOrders[storeName] = (deliveredOrders[storeName] || 0) + 1;
                if (breachStatus === "yes" && breachDuration > 15) {
                    deepPainOrders[storeName] = (deepPainOrders[storeName] || 0) + 1;
                }
            } else if (status === "attempted") {
                attemptedOrders[storeName] = (attemptedOrders[storeName] || 0) + 1;
            } else if (status.includes("cancel")) {
                cancelledOrders[storeName] = (cancelledOrders[storeName] || 0) + 1;
            }
        });
        // Show the summary table
        generateSummaryPage(storeOrders, deliveredOrders, attemptedOrders, cancelledOrders, {}, deepPainOrders);
    };
    if (file.name.endsWith(".csv")) {
        reader.readAsText(file);
    } else {
        reader.readAsArrayBuffer(file);
    }
}

// --- DeepPain Orders Details Feature ---
var DeepPainOrders_detailsRows = [];

function extractDeepPainOrders_details(fileData) {
    DeepPainOrders_detailsRows = [];
    fileData.forEach(order => {
        let breached = (order["Breached"] || "").toLowerCase();
        let breachedDuration = parseFloat(order["Breached Duration (In Min)"] || 0);
        let status = (order["Order Status"] || "").toLowerCase();
        // Deep Pain: delivered, breached=yes, breached duration > 15
        if (status === "delivered" && breached === "yes" && breachedDuration > 15) {
            DeepPainOrders_detailsRows.push({
                orderNumber: order["Order Number"] || "",
                orderDate: order["Order Date"] || "",
                storeName: order["Store Name"] || "",
                breached: order["Breached"] || "",
                breachedDuration: order["Breached Duration (In Min)"] || "",
                deepPainStatus: "Deep Pain",
                orderStatus: order["Order Status"] || "",
                customerName: order["Customer Name"] || "",
                otherDetails: JSON.stringify(order)
            });
        }
    });
}

document.getElementById("DeepPainOrders_detailsBtn").addEventListener("click", function () {
    const section = document.getElementById("DeepPainOrders_detailsSection");
    section.style.display = section.style.display === "none" ? "block" : "none";
    if (section.style.display === "block") {
        renderDeepPainOrders_detailsTable(DeepPainOrders_detailsRows);
    }
});

function renderDeepPainOrders_detailsTable(data) {
    const tbody = document.querySelector("#DeepPainOrders_detailsTable tbody");
    tbody.innerHTML = "";
    if (!data.length) {
        tbody.innerHTML = "<tr><td colspan='9'>No Deep Pain Orders found.</td></tr>";
        return;
    }
    data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.orderNumber}</td>
            <td>${row.orderDate}</td>
            <td>${row.storeName}</td>
            <td>${row.breached}</td>
            <td>${row.breachedDuration}</td>
            <td>${row.deepPainStatus}</td>
            <td>${row.orderStatus}</td>
            <td>${row.customerName}</td>
            <td><pre style='white-space:pre-wrap;max-width:200px;'>${row.otherDetails}</pre></td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById("DeepPainOrders_detailsSearch").addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    const filtered = DeepPainOrders_detailsRows.filter(row =>
        row.storeName.toLowerCase().includes(query) ||
        String(row.orderNumber).toLowerCase().includes(query) ||
        row.orderStatus.toLowerCase().includes(query) ||
        row.customerName.toLowerCase().includes(query)
    );
    renderDeepPainOrders_detailsTable(filtered);
});

// Patch processFile to also extract DeepPainOrders_details
const originalProcessFile2 = processFile;
processFile = function() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an Excel or CSV file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        let workbook;
        if (file.name.endsWith(".csv")) {
            workbook = XLSX.read(e.target.result, { type: "string" });
        } else {
            const data = new Uint8Array(e.target.result);
            workbook = XLSX.read(data, { type: "array" });
        }
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const fileData = XLSX.utils.sheet_to_json(sheet);
        extractDeepPainOrders_details(fileData);
        // --- AGGREGATION LOGIC ---
        let storeOrders = {};
        let deliveredOrders = {};
        let attemptedOrders = {};
        let cancelledOrders = {};
        let deepPainOrders = {};
        const includedStores = [
            "Kalyan nagar", 
            "Basaweshwar Nagar Mnow", 
            "Jakkur Mnow", 
            "Begur Mnow", 
            "Thyagaraja Nagar Mnow", 
            "Brookfield Mnow", 
            "JP nagar Mnow", 
            "Sarjapur road Mnow"
        ];
        fileData.forEach(order => {
            let storeName = order["Store Name"] ? order["Store Name"].trim() : "Unknown Store";
            if (!includedStores.includes(storeName)) return;
            let status = order["Order Status"] ? order["Order Status"].trim().toLowerCase() : "";
            let breachStatus = order["Breached"] ? order["Breached"].trim().toLowerCase() : "no";
            let breachDuration = order["Breached Duration (In Min)"] ? parseFloat(order["Breached Duration (In Min)"]) : 5;
            storeOrders[storeName] = (storeOrders[storeName] || 0) + 1;
            if (status === "delivered") {
                deliveredOrders[storeName] = (deliveredOrders[storeName] || 0) + 1;
                if (breachStatus === "yes" && breachDuration > 15) {
                    deepPainOrders[storeName] = (deepPainOrders[storeName] || 0) + 1;
                }
            } else if (status === "attempted") {
                attemptedOrders[storeName] = (attemptedOrders[storeName] || 0) + 1;
            } else if (status.includes("cancel")) {
                cancelledOrders[storeName] = (cancelledOrders[storeName] || 0) + 1;
            }
        });
        // Show the summary table
        generateSummaryPage(storeOrders, deliveredOrders, attemptedOrders, cancelledOrders, {}, deepPainOrders);
        originalProcessFile2.apply(this, arguments);
    };
    if (file.name.endsWith(".csv")) {
        reader.readAsText(file);
    } else {
        reader.readAsArrayBuffer(file);
    }
}

let lastSummaryHTML = ""; // Store the summary table HTML
let lastProjectionHTML = ""; // Store the projection table HTML

// After generating the summary table, store its HTML and show the Final Table button
function generateSummaryPage(storeOrders, deliveredOrders, attemptedOrders, cancelledOrders, actualRiders, deepPainOrders) {
    let totalOrdersSum = 0;
    let cancelledSum = 0;
    let deliveredSum = 0;
    let atteptedSum = 0;
    let deepPainSum = 0;
    let SumofCanelledPercent = 0;

    let htmlContent = `
        <table class="table table-bordered" id="summaryTable">
            <thead>
                <tr>
                    <th>Store Name</th>
                    <th>Total Orders</th>
                    <th>Cancelled Orders</th>
                    <th>Cancelled %</th>
                    <th>Delivered Orders</th>
                    <th>Attempted Orders</th>
                    <th>Deep Pain</th>
                    <th>Deep Pain %</th>
                    <th>Actual Riders</th>
                    <th>Idle rider</th>
                    <th>BF</th>
                </tr>
            </thead>
            <tbody>
                ${Object.keys(storeOrders).map((store, rowIdx) => {
                    let totalOrders = storeOrders[store] || 0;
                    let cancelled = cancelledOrders[store] || 0;
                    let delivered = deliveredOrders[store] || 0;
                    let attempted = attemptedOrders[store] || 0;
                    let deepPain = deepPainOrders[store] || 0;
                    let cancelledPercent = totalOrders > 0 ? (((cancelled + attempted) / totalOrders) * 100).toFixed(2) : "0.00";
                    let deepPainPercent = delivered > 0 ? ((deepPain / delivered) * 100).toFixed(2) : "0.00";

                    totalOrdersSum += totalOrders;
                    cancelledSum += cancelled;
                    deliveredSum += delivered;
                    atteptedSum += attempted;
                    deepPainSum += deepPain;
                    SumofCanelledPercent += parseFloat(cancelledPercent);

                    // Add input fields for the last 3 columns
                    return `
                        <tr>
                            <td>${store}</td>
                            <td>${totalOrders}</td>
                            <td>${cancelled}</td>
                            <td>${cancelledPercent}%</td>
                            <td>${delivered}</td>
                            <td>${attempted}</td>
                            <td>${deepPain}</td>
                            <td>${deepPainPercent}%</td>
                            <td><input type="text" class="summary-input" id="input-${rowIdx}-0" data-row="${rowIdx}" data-col="0"></td>
                            <td><input type="text" class="summary-input" id="input-${rowIdx}-1" data-row="${rowIdx}" data-col="1"></td>
                            <td><input type="text" class="summary-input" id="input-${rowIdx}-2" data-row="${rowIdx}" data-col="2"></td>
                        </tr>
                    `;
                }).join("")}
            </tbody>
            <tfoot>
                <tr style="background:#007bff;color:#fff;font-weight:bold;">
                    <td>Total</td>
                    <td>${totalOrdersSum}</td>
                    <td>${cancelledSum}</td>
                    <td>${(SumofCanelledPercent/Object.keys(storeOrders).length).toFixed(2)}%</td>
                    <td>${deliveredSum}</td>
                    <td>${atteptedSum}</td>
                    <td>${deepPainSum}</td>
                    <td>${deliveredSum > 0 ? ((deepPainSum / deliveredSum) * 100).toFixed(2) : "0.00"}%</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    `;
    document.getElementById("output").innerHTML = htmlContent;
    lastSummaryHTML = htmlContent;
    document.getElementById("finalTableBtn").style.display = "inline-block";

    // Enable arrow key navigation for the input fields
    enableSummaryArrowNavigation();
}

// Add this function to enable arrow navigation
function enableSummaryArrowNavigation() {
    const inputs = Array.from(document.querySelectorAll('.summary-input'));
    const rowCount = document.querySelectorAll('#summaryTable tbody tr').length;
    const colCount = 3; // Actual Riders, Idle rider, BF

    inputs.forEach((input, idx) => {
        input.addEventListener('keydown', function(e) {
            let row = parseInt(input.dataset.row);
            let col = parseInt(input.dataset.col);
            if (e.key === 'ArrowDown' && row < rowCount - 1) {
                e.preventDefault();
                const next = document.querySelector(`.summary-input[data-row="${row+1}"][data-col="${col}"]`);
                if (next) next.focus();
            }
            if (e.key === 'ArrowUp' && row > 0) {
                e.preventDefault();
                const prev = document.querySelector(`.summary-input[data-row="${row-1}"][data-col="${col}"]`);
                if (prev) prev.focus();
            }
            if (e.key === 'ArrowRight' && col < colCount - 1) {
                e.preventDefault();
                const right = document.querySelector(`.summary-input[data-row="${row}"][data-col="${col+1}"]`);
                if (right) right.focus();
            }
            if (e.key === 'ArrowLeft' && col > 0) {
                e.preventDefault();
                const left = document.querySelector(`.summary-input[data-row="${row}"][data-col="${col-1}"]`);
                if (left) left.focus();
            }
        });
    });
}

// Helper to get the current projection table as HTML
function getProjectionTableHTML() {
    const table = document.getElementById("reportTable");
    return table ? table.outerHTML : "";
}

// Final Table button logic
document.getElementById("finalTableBtn").addEventListener("click", function () {
    // 1. Get projection data from the DOM
    const projectionTable = document.getElementById("reportTable");
    const projectionRows = projectionTable ? projectionTable.querySelectorAll("tbody tr") : [];
    const projectionData = {};
    let projectionTotals = [];

    projectionRows.forEach((row, idx) => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 2) return;
        const store = cells[0].textContent.trim();
        if (store.toLowerCase() === "total") {
            projectionTotals = Array.from(cells).slice(1).map(td => td.textContent.trim());
            return;
        }
        projectionData[store] = Array.from(cells).slice(1).map(td => td.textContent.trim());
    });

    // 2. Get summary data from the last summary table (already stored in lastSummaryHTML)
    // We'll parse the HTML to extract the summary data
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = lastSummaryHTML;
    const summaryRows = tempDiv.querySelectorAll("tbody tr");
    const summaryData = {};
    let summaryTotals = [];

    summaryRows.forEach((row, idx) => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 2) return;
        const store = cells[0].textContent.trim();
        // Get manual input values from the DOM
        const actualRiders = document.getElementById(`input-${idx}-0`)?.value || "";
        const idleRider = document.getElementById(`input-${idx}-1`)?.value || "";
        const bf = document.getElementById(`input-${idx}-2`)?.value || "";
        // Replace the last 3 columns with manual values
        const summaryArr = Array.from(cells).slice(1, -3).map(td => td.textContent.trim());
        summaryArr.push(actualRiders, idleRider, bf);
        summaryData[store] = summaryArr;
    });

    // Get summary totals
    const summaryTotalRow = tempDiv.querySelector("tfoot tr");
    if (summaryTotalRow) {
        summaryTotals = Array.from(summaryTotalRow.querySelectorAll("td")).slice(1).map(td => td.textContent.trim());
    }

    // 3. Merge headers
    const projectionHeaders = projectionTable ? Array.from(projectionTable.querySelectorAll("thead th")).slice(1).map(th => th.textContent.trim()) : [];
    const summaryHeaders = tempDiv.querySelectorAll("thead th");
    const summaryHeaderArr = Array.from(summaryHeaders).map(th => th.textContent.trim()).slice(1); // skip Store Name

    // 4. Build merged table HTML
      // Only exclude Attempted Orders % columns for buffer, keep all other columns and logic
     let attemptedOrdersPctIndices = [];
    let attemptedOrdersPctHeaders = projectionHeaders.slice(1).filter((h, idx) => !h.toLowerCase().includes('buffer'));
    projectionHeaders.slice(1).forEach((h, idx) => {
        if (!h.toLowerCase().includes('buffer')) attemptedOrdersPctIndices.push(idx + 1); // +1 to match column index
    });
    let mergedHTML = `<style>
.hide-col { display: none !important; }
.hide-corrected-deep-pain { display: none !important; }
</style>
<table class="table table-bordered"><thead><tr>
        <th>Store Name</th>
        ${projectionHeaders.map(h => `<th>${h}</th>`).join("")}
        ${summaryHeaderArr.map((h, i) => {
            let hide = h.toLowerCase().includes('cancelled orders') || h.toLowerCase().includes('attempted orders') || h.toLowerCase().includes('deep pain') && !h.toLowerCase().includes('%');
            return `<th${hide ? ' class="hide-col"' : ''}>${h}</th>`;
        }).join("")}
        ${attemptedOrdersPctHeaders.map(h => `<th>Order Attainment (${h})</th>`).join("")}
        <th>Deep Pain (Order Count)</th>
        <th>Order Attainment </th>
        <th class="hide-corrected-deep-pain">Corrected DeepPain</th>
        <th>Actual Deep_Pain</th>
    </tr></thead><tbody>`;

    // 5. Merge rows by store name
    const allStores = Array.from(new Set([...Object.keys(projectionData), ...Object.keys(summaryData)]));
    let deepPainOrderCounts = [];
    let additionalOrdersList = [];
    let correctedDeepPainList = [];
    let actualDeepPainList = [];
    allStores.forEach(store => {
        mergedHTML += `<tr><td>${store}</td>`;
        // Projection columns
        (projectionData[store] || projectionHeaders.map(() => "")).forEach(val => {
            mergedHTML += `<td>${val}</td>`;
        });
        // Summary columns
        (summaryData[store] || summaryHeaderArr.map(() => "")).forEach((val, i) => {
            let h = summaryHeaderArr[i];
            let hide = h.toLowerCase().includes('cancelled orders') || h.toLowerCase().includes('attempted orders') || h.toLowerCase().includes('deep pain') && !h.toLowerCase().includes('%');
            if (h.toLowerCase().includes('deep pain %')) {
                let percentVal = val;
                if (typeof percentVal === 'string' && percentVal.includes('%')) percentVal = percentVal.replace('%', '');
                percentVal = parseFloat(percentVal) || 0;
                let color = percentVal > 5 ? 'red' : '#0f0';
                mergedHTML += `<td${hide ? ' class="hide-col"' : ''} style="color:${color};">${val}</td>`;
            } else if (i >= summaryHeaderArr.length - 3) {
                mergedHTML += `<td${hide ? ' class="hide-col"' : ''}><input type="text" class="merged-input" data-store="${store}" data-col="${i}" value="${val || ''}"></td>`;
            } else {
                mergedHTML += `<td${hide ? ' class="hide-col"' : ''}>${val}</td>`;
            }
        });
        // Order Attainment columns for only non-buffer Projected Orders columns
        if (projectionData[store]) {
            attemptedOrdersPctIndices.forEach((colIdx, arrIdx) => {
                let projected = parseInt(projectionData[store][colIdx]) || 0;
                let total = summaryData[store] ? parseInt(summaryData[store][0]) || 0 : 0;
                let percent = projected ? ((total / projected) * 100).toFixed(2) : "0.00";
                mergedHTML += `<td class="attempted-pct-cell" data-store="${store}" data-col="${colIdx}">${percent}%</td>`;
            });
        } else {
            attemptedOrdersPctIndices.forEach((colIdx) => {
                mergedHTML += `<td class="attempted-pct-cell" data-store="${store}" data-col="${colIdx}">0.00%</td>`;
            });
        }
        // Deep Pain (Order Count) column
        let totalOrders = summaryData[store] ? parseFloat(summaryData[store][0]) || 0 : 0;
        let deepPainPercentIdx = summaryHeaderArr.findIndex(hh => hh.toLowerCase().includes('deep pain %'));
        let deepPainPercent = summaryData[store] ? summaryData[store][deepPainPercentIdx] : '';
        if (deepPainPercent && typeof deepPainPercent === 'string' && deepPainPercent.includes('%')) deepPainPercent = deepPainPercent.replace('%', '');
        deepPainPercent = parseFloat(deepPainPercent) || 0;
        let deepPainOrderCount = ((totalOrders * deepPainPercent) / 100);
        deepPainOrderCounts.push(deepPainOrderCount);
        mergedHTML += `<td>${deepPainOrderCount.toFixed(2)}</td>`;
        // Order Attainment  column
        let projectedBuffer = projectionData[store] ? parseFloat(projectionData[store][2]) || 0 : 0;
        let additionalOrders = (totalOrders - projectedBuffer) < 0 ? 0 : (totalOrders - projectedBuffer);
        additionalOrdersList.push(additionalOrders);
        mergedHTML += `<td>${additionalOrders}</td>`;
        // Corrected DeepPain column
        let correctedDeepPain = deepPainOrderCount - additionalOrders;
        correctedDeepPainList.push(correctedDeepPain);
        mergedHTML += `<td class="hide-corrected-deep-pain">${correctedDeepPain.toFixed(2)}</td>`;
        // Actual Deep_Pain column (new logic)
        let actualDeepPain = 0;
        if (totalOrders !== 0) {
          actualDeepPain = correctedDeepPain / totalOrders * 100; // Convert to percentage
          if (actualDeepPain < 0) actualDeepPain = 0; // Ensure no negative value
        }
        actualDeepPainList.push(actualDeepPain);
        mergedHTML += `<td class="actual-deep-pain-cell">${actualDeepPain.toFixed(2)}</td>`;
        mergedHTML += `</tr>`;
    });
    // 6. Add totals row (footer)
    mergedHTML += `<tfoot><tr style="background:#000;color:#fff;font-weight:bold;">
        <td>Total</td>`;
    projectionTotals.forEach(val => mergedHTML += `<td>${val}</td>`);
    summaryHeaderArr.forEach((h, i) => {
        let hide = h.toLowerCase().includes('cancelled orders') || h.toLowerCase().includes('attempted orders') || h.toLowerCase().includes('deep pain') && !h.toLowerCase().includes('%');
        if (h.toLowerCase().includes('deep pain %')) {
            let deepPainPercents = allStores.map(store => {
                let idx = summaryHeaderArr.findIndex(hh => hh.toLowerCase().includes('deep pain %'));
                let val = summaryData[store] ? summaryData[store][idx] : '';
                if (val && val.includes('%')) val = val.replace('%', '');
                let num = parseFloat(val);
                return isNaN(num) ? 0 : num;
            });
            let avg = deepPainPercents.length ? (deepPainPercents.reduce((a, b) => a + b, 0) / deepPainPercents.length) : 0;
            let color = avg > 5 ? 'red' : '#0f0';
            mergedHTML += `<td${hide ? ' class="hide-col"' : ''} style="color:${color};">${avg.toFixed(2)}%</td>`;
        } else if (i >= summaryHeaderArr.length - 3) {
            mergedHTML += `<td id="merged-footer-userinput-${i - (summaryHeaderArr.length - 3)}">0</td>`;
        } else if (summaryTotals[i]) {
            mergedHTML += `<td${hide ? ' class="hide-col"' : ''}>${summaryTotals[i]}</td>`;
        } else {
            mergedHTML += `<td${hide ? ' class="hide-col"' : ''}></td>`;
        }
    });
    attemptedOrdersPctIndices.forEach((colIdx, arrIdx) => {
        mergedHTML += `<td id="merged-footer-attempted-pct-${colIdx}">0.00%</td>`;
    });
    let deepPainOrderCountTotal = deepPainOrderCounts.reduce((a, b) => a + b, 0);
    mergedHTML += `<td>${deepPainOrderCountTotal.toFixed(2)}</td>`;
    let additionalOrdersTotal = additionalOrdersList.reduce((a, b) => a + b, 0);
    mergedHTML += `<td>${additionalOrdersTotal}</td>`;
    let correctedDeepPainTotal = correctedDeepPainList.reduce((a, b) => a + b, 0);
    // Hide the Corrected DeepPain cell in the footer (second last cell)
    mergedHTML += `<td class="hide-corrected-deep-pain">${correctedDeepPainTotal.toFixed(2)}</td>`;
    // Show average for Actual Deep_Pain in the footer (last column), with id actual-deep-pain-cell-average
    let actualDeepPainAvg = actualDeepPainList.length ? (actualDeepPainList.reduce((a, b) => a + b, 0) / actualDeepPainList.length) : 0;
    mergedHTML += `<td id="actual-deep-pain-cell-average">${actualDeepPainAvg.toFixed(2)}</td>`;
    mergedHTML += `</tr>`;
    // Grand total row for user input columns
    mergedHTML += `<tr style="background:#007bff;color:#fff;font-weight:bold;"><td>Grand Total</td>`;
    projectionHeaders.forEach(() => mergedHTML += `<td></td>`);
    summaryHeaderArr.forEach((h, i) => {
        let hide = h.toLowerCase().includes('cancelled orders') || h.toLowerCase().includes('attempted orders') || h.toLowerCase().includes('deep pain') && !h.toLowerCase().includes('%');
        if (i === summaryHeaderArr.length - 3) {
            mergedHTML += `<td colspan="3" id="merged-footer-userinput-grand">0</td>`;
        } else if (i < summaryHeaderArr.length - 3) {
            mergedHTML += `<td${hide ? ' class="hide-col"' : ''}></td>`;
        }
    });
    attemptedOrdersPctIndices.forEach(() => {
        mergedHTML += `<td></td>`;
    });
    mergedHTML += `<td></td>`; // Deep Pain (Order Count) grand total (not needed)
    mergedHTML += `<td></td>`; // Order Attainment  grand total (not needed)
    mergedHTML += `<td></td>`; // Corrected DeepPain grand total (not needed)
    mergedHTML += `<td></td>`; // Actual Deep_Pain grand total (not needed)
    mergedHTML += `</tr></tfoot>`;
    mergedHTML += `</tbody></table>`;

    document.getElementById("output").innerHTML = `
    <div style="font-weight:bold;font-size:18px;margin-bottom:8px;">
        Current Time: ${getCurrentTimeString()}
    </div>
    <h2>📊 Final Merged Table</h2>
    ${mergedHTML}`;

    // --- DYNAMIC FOOTER UPDATE LOGIC ---
    function updateMergedFooterTotals() {
        let colTotals = [0, 0, 0];
        // For each row, sum user input columns
        document.querySelectorAll('.merged-input').forEach(input => {
            const col = parseInt(input.dataset.col);
            const val = parseFloat(input.value);
            if (!isNaN(val)) colTotals[col - (summaryHeaderArr.length - 3)] += val;
        });
        // Update user input column totals
        for (let i = 0; i < 3; ++i) {
            const footerCell = document.getElementById(`merged-footer-userinput-${i}`);
            if (footerCell) {
                if (i === 2) { // BF column: show average as (sum of user input) / 8
                    let bfInputs = Array.from(document.querySelectorAll('input[data-col="' + (summaryHeaderArr.length - 1) + '"]'));
                    let bfSum = 0;
                    bfInputs.forEach(input => {
                        let num = parseFloat(input.value);
                        if (!isNaN(num)) { bfSum += num; }
                    });
                    let avg = bfSum / 8; // Always divide by 8 (number of stores)
                    footerCell.textContent = avg.toFixed(2);
                } else {
                    footerCell.textContent = colTotals[i];
                }
            }
        }
        // Grand total
        document.getElementById('merged-footer-userinput-grand').textContent = colTotals.reduce((a, b) => a + b, 0);
        // Update Order Attainment average for each column (only non-buffer)
        attemptedOrdersPctIndices.forEach((colIdx) => {
            let sum = 0, count = 0;
            document.querySelectorAll(`.attempted-pct-cell[data-col="${colIdx}"]`).forEach(cell => {
                let pct = parseFloat(cell.textContent);
                if (!isNaN(pct)) {
                    sum += pct;
                    count++;
                }
            });
            let avg = count ? (sum / count) : 0;
            document.getElementById(`merged-footer-attempted-pct-${colIdx}`).textContent = avg.toFixed(2) + '%';
        });
    }
    // Initial update
    updateMergedFooterTotals();
    // Listen for input changes
    document.querySelectorAll('.merged-input').forEach(input => {
        input.addEventListener('input', function() {
            // Update Order Attainment for this row if needed (if user changes total orders input)
            const row = input.closest('tr');
            if (row) {
                // Find the total orders cell and projected orders cells in this row
                const cells = row.querySelectorAll('td');
                let totalOrders = parseFloat(cells[projectionHeaders.length + 1]?.querySelector('input')?.value || cells[projectionHeaders.length + 1]?.textContent || 0);
                attemptedOrdersPctIndices.forEach((colIdx) => {
                    let projectedOrders = parseFloat(cells[colIdx + 1]?.textContent || 0);
                    let attemptedCell = row.querySelector(`.attempted-pct-cell[data-col="${colIdx}"]`);
                    if (attemptedCell) {
                        let pct = attemptedOrdersPercent(totalOrders, projectedOrders);
                        attemptedCell.textContent = pct + '%';
                    }
                });
            }
            updateMergedFooterTotals();
        });
    });
    // Enable arrow key navigation for merged-input fields
    const mergedInputs = Array.from(document.querySelectorAll('.merged-input'));
    if (mergedInputs.length > 0) {
        // Determine row and col counts
        const mergedRows = document.querySelectorAll('#output table tbody tr');
        const rowCount = mergedRows.length;
        const colCount = 3; // Always 3 user input columns
        mergedInputs.forEach((input, idx) => {
            input.addEventListener('keydown', function(e) {
                let row = -1, col = -1;
                // Find row and col by traversing DOM
                for (let r = 0; r < rowCount; ++r) {
                    const rowInputs = mergedRows[r].querySelectorAll('.merged-input');
                    for (let c = 0; c < rowInputs.length; ++c) {
                        if (rowInputs[c] === input) {
                            row = r;
                            col = c;
                        }
                    }
                }
                if (row === -1 || col === -1) return;
                if (e.key === 'ArrowDown' && row < rowCount - 1) {
                    e.preventDefault();
                    const next = mergedRows[row + 1].querySelectorAll('.merged-input')[col];
                    if (next) next.focus();
                }
                if (e.key === 'ArrowUp' && row > 0) {
                    e.preventDefault();
                    const prev = mergedRows[row - 1].querySelectorAll('.merged-input')[col];
                    if (prev) prev.focus();
                }
                if (e.key === 'ArrowRight' && col < colCount - 1) {
                    e.preventDefault();
                    const right = mergedRows[row].querySelectorAll('.merged-input')[col + 1];
                    if (right) right.focus();
                }
                if (e.key === 'ArrowLeft' && col > 0) {
                    e.preventDefault();
                    const left = mergedRows[row].querySelectorAll('.merged-input')[col - 1];
                    if (left) left.focus();
                }
            });

        });
    }
});

// List of stores in the required order
const finalStores = [
  "Kalyan nagar ",
  "Basaweshwar Nagar Mnow",
  "Jakkur Mnow",
  "Begur Mnow",
  "Thyagaraja Nagar Mnow",
  "Brookfield Mnow",
  "JP nagar Mnow",
  "Sarjapur road Mnow"
];

// Show final table on button click
document.getElementById('finalTableBtn').addEventListener('click', function() {
  const section = document.getElementById('finalTableSection');
  section.style.display = 'block';
  generateFinalTable();
});

// Helper for Attempted Orders %
function attemptedOrdersPercent(totalOrders, projectedOrders) {

  if (!projectedOrders || projectedOrders === 0) return "0.00";
  return ((totalOrders / projectedOrders) * 100).toFixed(2);
}

// Helper to get the correct Projected Orders for Order Attainment calculation
function getProjectedOrdersForAttempted(store) {
  // Use the Projected Orders | till 9-10 AM column (second column after store name)
  const projectionTable = document.getElementById("reportTable");
  if (!projectionTable) return 0;
  const rows = projectionTable.querySelectorAll("tbody tr");
  for (let row of rows) {
    const cells = row.querySelectorAll("td");
    // if() -- removed incomplete statement
    // (removed incomplete 'if' statement)
    if (cells[1] && cells[1].textContent.trim() === store) {
      return parseInt(cells[2].textContent.trim()) || 0;
    }
  }
  return 0;
}

// Generate the final table rows
function generateFinalTable() {
  const tbody = document.querySelector('#finalTable tbody');
  tbody.innerHTML = '';
  // Get projected orders for today (full day) from reportData
  const todayDate = getTodayDateString();
  const todayData = reportData.find(d => d.date === todayDate) || reportData[reportData.length - 1];
  finalStores.forEach(store => {
    // Get projected orders for this store (full day)
    const projectedOrders = todayData.stores[store] || 0;
    // Get total orders from the summary table if available
    let totalOrders = 0;
    // Try to get from summary table inputs if available
    const summaryTable = document.getElementById('summaryTable');
    if (summaryTable) {
      const rows = summaryTable.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells[0] && cells[0].textContent.trim() === store) {
          totalOrders = parseInt(cells[1].textContent.trim()) || 0;
        }
      });
    }
    // Calculate attempted orders percentage
    const attemptedPercent = attemptedOrdersPercent(totalOrders, projectedOrders);
    // Generate table row
    const rowHTML = `
      <tr>
        <td>${store}</td>
        <td>${totalOrders}</td>
        <td>${projectedOrders}</td>
        <td>${attemptedPercent}%</td>
      </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', rowHTML);
  });
}

// --- FINAL TABLE PAGE LOGIC --- //
// Show/hide sections based on URL hash
function handleHashChange() {
  const hash = window.location.hash;
  const reportSection = document.getElementById('reportSection');
  const finalTableSection = document.getElementById('finalTableSection');

  if (hash === '#finalTable') {
    reportSection.style.display = 'none';
    finalTableSection.style.display = 'block';
    generateFinalTable(); // Generate final table on hash change
  } else {
    reportSection.style.display = 'block';
    finalTableSection.style.display = 'none';
  }
}

// Initial check
handleHashChange();

// Bind hash change to window event
window.addEventListener('hashchange', handleHashChange);

// Normalize store names for consistent display
function normalizeStoreName(name) {
  if (!name) return '';
  let n = name.trim().toLowerCase();
  if (n === 'jp nagar') return 'JP nagar Mnow';

  if (n === 'sarjapur road') return 'Sarjapur road Mnow';
  return name;
}

// Get current time as a formatted string
function getCurrentTimeString() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Convert Excel date serial to JS Date
function excelDateToJSDate(serial) {
    // Excel date serial to JS Date
    const utc_days  = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;                                        
    const date_info = new Date(utc_value * 1000);
    // Add fractional day as time
    const fractional_day = serial - Math.floor(serial);
    const total_seconds = Math.round(86400 * fractional_day);
    date_info.setSeconds(total_seconds);
    return date_info;
}

function formatDate(dt) {
    const pad = n => n < 10 ? '0' + n : n;
    return `${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}-${dt.getFullYear()} ${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}