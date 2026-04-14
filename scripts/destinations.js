let ascending = true;

function sortTable() {
    const table = document.getElementById("destTable");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const header = document.querySelector(".sortable");
    rows.sort((a, b) => {
        const priceA = Number.parseInt(a.cells[3].innerText);
        const priceB = Number.parseInt(b.cells[3].innerText);
        return ascending ? priceA - priceB : priceB - priceA;
    });
    ascending = !ascending;
    header.innerHTML = `Price (€) ${ascending ? "⬍" : "⬆"}`;
    rows.forEach(row => tbody.appendChild(row));
}
