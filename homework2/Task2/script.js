const table = document.createElement("table");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headers = ["№", "Full name", "Position", "Salary"];

headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

const data = [
  ["1", "Bill Gates", "Founder Microsoft", "$ 1000"],
  ["2", "Steve Jobs", "Founder Apple", "$ 1200"],
  ["3", "Larry Page", "Founder Google", "$ 1100"],
  ["4", "Mark Zuckerberg", "Founder Facebook", "$ 1300"],
];

data.forEach((rowData) => {
  const row = document.createElement("tr");

  rowData.forEach((cellData) => {
    const cell = document.createElement("td");
    cell.textContent = cellData;
    row.appendChild(cell);
  });

  tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);
