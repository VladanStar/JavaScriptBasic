

// let  btnE2 = document.querySelector('.btn2');
// btnE2.addEventListener('click', 'order');




document.getElementsByClassName("container")[0].style.display = "none";
// import { userE } from "./login.js";
fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Orders/")
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
        <tr>
            <td> ${value.OrderID}</td>
            <td>${value.CustomerID}</td>
            <td>${value.OrderDate}</td>
            <td>${value.Freight}</td>
        </tr > `;

  document.getElementById("table_body").innerHTML += tableData;
}
$('input[name="datefilter"]').on(
  "apply.daterangepicker",
  function (ev, picker) {
    $(this).val(
      // 1996-07-04
      picker.startDate.format("YYYY-MM-DD") +
        " - " +
        picker.endDate.format("YYYY-MM-DD")
    );
    var startDate = picker.startDate.format("YYYY-MM-DD");
    var endDate = picker.endDate.format("YYYY-MM-DD");
    if (startDate != "" && endDate != "") {
      console.log(startDate, endDate);
      var endpoint =
        "https://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json";

      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.value);
          let dataA = data.value;

          searchDate(dataA);
         
        });
      function searchDate(dataA) {
        var dataA = dataA.value;
        console.log(dataA);
        var filteredDates = _.filter(dataA, function (dataA) {
          return dataA.OrderDate > startDate && dataA.OrderDate < endDate;
        });
        console.log(filteredDates);
        for (let i = 0; i < filteredDates.length; i++) {
          let name = filteredDates[i].CustomerID;
          console.log(name);
        }
      }
      // let filterInput = document.getElementById("filter");
      // let grid = document.querySelector(".products");
      

  

      $('input[name="datefilter"]').on(
        "cancel.daterangepicker",
        function (ev, picker) {
          $(this).val("");
        }
      );
    }
  }
);

