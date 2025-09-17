// ==================== Update date & time ====================
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('en-GB');
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  document.getElementById("date").textContent = `Date - ${date}`;
  document.getElementById("time").textContent = `Time ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ==================== Calculate row totals ====================
function calculateTotals() {
  const table = document.getElementById("staffTable");
  const rows = table.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    let sum = 0;
    for (let i = 1; i <= 3; i++) {
      const val = parseInt(cells[i].textContent) || 0;
      sum += val;
    }
    cells[4].textContent = sum;
  });
}

// ==================== Enable arrow key navigation ====================
document.addEventListener("keydown", function (e) {
  const active = document.activeElement;
  if (active.tagName === "TD" && active.isContentEditable) {
    const currentCell = active;
    const row = currentCell.parentElement;
    const table = row.parentElement;
    const rowIndex = Array.from(table.children).indexOf(row);
    const colIndex = Array.from(row.children).indexOf(currentCell);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (row.nextElementSibling)
          row.nextElementSibling.children[colIndex]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        if (row.previousElementSibling)
          row.previousElementSibling.children[colIndex]?.focus();
        break;
      case "ArrowRight":
        e.preventDefault();
        if (currentCell.nextElementSibling?.isContentEditable)
          currentCell.nextElementSibling.focus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (currentCell.previousElementSibling?.isContentEditable)
          currentCell.previousElementSibling.focus();
        break;
    }
  }
});

// ==================== Recalculate totals on edit ====================
document.querySelectorAll("td[contenteditable]").forEach(cell => {
  cell.addEventListener("input", calculateTotals);
});

// ==================== Screenshot & Share functionality ====================
document.getElementById("shareBtn").addEventListener("click", async () => {
  const container = document.getElementById("reportContainer"); // Full report container

  try {
    const canvas = await html2canvas(container);
    canvas.toBlob(async function (blob) {
      const file = new File([blob], "staff-summary.png", { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Talkie Talkie – Staff Summary Report",
          text: "Staff Summary Screenshot",
          files: [file],
        });
      } else {
        alert("Sharing not supported on this browser. Try mobile or Chrome.");
      }
    });
  } catch (err) {
    console.error("Share failed:", err);
  }
});
