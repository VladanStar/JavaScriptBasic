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

      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.value);
          let dataA = data.value;

          searchDate(data);
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

      $('input[name="datefilter"]').on(
        "cancel.daterangepicker",
        function (ev, picker) {
          $(this).val("");
        }
      );
    }
  }
);