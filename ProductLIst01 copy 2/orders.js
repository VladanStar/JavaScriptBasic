//"https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json";
document.getElementsByClassName("container")[0].style.display = "none";
// import { userE } from "./login.js";
fetch(
  "https://services.odata.org/v4/Northwind/Northwind.svc/Orders?$format=json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.value);
    for (let value of data.value) {
      addTable(value);
    }
  });
function addTable(value) {
  let tableData = "";
  tableData += `
        <tr class= "tada">
            <td> ${value.OrderID}</td>
            <td>${value.CustomerID}</td>
            <td class= "odatle" >${value.OrderDate.slice(0, 10)}</td>
            <td>${value.Freight}</td>
        </tr > `;

  document.getElementById("table_body").innerHTML += tableData;
}
