function createDynamicTable() {
  const rows = parseInt(prompt("Enter the number of rows:"));
  const columns = parseInt(prompt("Enter the number of columns:"));

  const table = document.getElementById("table");

  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();

    for (let j = 0; j < columns; j++) {
      const cell = row.insertCell();
      
      cell.textContent = (`Row-${i + 1} Column-${j + 1}`);
    }
  }

  document.body.appendChild(table);
}

document.getElementById("tableBtn").addEventListener("click", createDynamicTable);

  

