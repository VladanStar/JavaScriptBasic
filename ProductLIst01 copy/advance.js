// fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Orders/")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.value);

//      searchDate(data.value);

//   });
// import { value } from "./db.js";
// let row = value;
// console.log(row);

// console.log(row);
$(function () {
  $('input[name="datefilter"]').daterangepicker({
    showDropdowns: true,
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
    },
  });

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
          "https://services.odata.org/v4/Northwind/Northwind.svc/Orders/";
          let grid = document.querySelector(".products");
        fetch(endpoint)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.value);
            let dataA = data.value;

            searchDate(grid,data);
          });
        function searchDate(appendIn,dataA) {
          var dataA = dataA.value;
          console.log(dataA)
          var filteredDates = _.filter(dataA, function (dataA) {
            return (dataA.OrderDate > startDate && dataA.OrderDate < endDate);
          });
          let div = document.createElement("div");
          div.className = "item justify-self-center";
          console.log(filteredDates);
         let name = dataA.ShipName;
          console.log(name)
          div.innerHTML=``;
          div.innerHTML = `
            <img src="https://www.slikomania.rs/fotky6509/fotos/CWFFL036.jpg" class="bg-cover img">
            <div class="text-center py-3 font-poppins">
                <h3 class="text-lg title name"> Name: ${name}</h3>
                <h3 class="text-lg"> CustomerID${dataA.CustomerID}</h3>
                <a href="$" class="block"><span class="text-sm text-red-400"> Order ID: ${dataA.OrderID}</span></a>
                <span class="block py-3"><span class="text-md"> OrderDate: ${dataA.OrderDate}</span></span>
                <span class="block py-3"> <span class="text-md"> RequiredDate: ${dataA.ShippedDate}</span></span>
                <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Bay Now</button>
            </div>
            `;
        
          appendIn.appendChild(div);
        }

        $('input[name="datefilter"]').on(
          "cancel.daterangepicker",
          function (ev, picker) {
            $(this).val("");
          }
        );
      }
    }
  );
});
