

 document.getElementsByClassName('container')[0].style.display = "none";
fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Orders/")
.then(response => response.json())
.then((data) => {

     console.log(data.value);
    for (let value of data.value) {
       addTable(value)
    }

});
function addTable(value){
   
    let tableData = "";
  
        tableData += `
        <tr>
            <td> ${value.OrderID}</td >
            <td>${value.CustomerID}</td>
        </tr > `;

    

    document.getElementById("table_body").
        innerHTML += tableData;
}