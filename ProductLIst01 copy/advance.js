fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.value);

     searchDate(data.value);
    
  });
function searchDate(value){
    console.log(value)
      var myDataTable = $('#staff').DataTable({
        sDom: 't',
        data: myTableData,
        columns: [{
            title: 'Name',
            data: 'name'
          },
          {
            title: 'Position',
            data: 'position'
          },
          {
            title: 'Office',
            data: 'office'
          },
          {
            title: 'Hire date',
            data: 'start_date'
          },
          {
            title: 'Salary',
            data: 'salary'
          }
        ]
      });
  
      // I instantiate the two datepickers here, instead of all at once like before.
      // I also changed the dateFormat to match the format of the dates in the data table.
      $("#startdate").datepicker({
        "dateFormat": "yy/mm/dd",
        "onSelect": function(date) {  // This handler kicks off the filtering.
          minDateFilter = new Date(date).getTime();
          myDataTable.draw(); // Redraw the table with the filtered data.
        }
      }).keyup(function() {
        minDateFilter = new Date(this.value).getTime();
        myDataTable.draw();
      });
  
      $("#enddate").datepicker({
        "dateFormat": "yy/mm/dd",
        "onSelect": function(date) {
          maxDateFilter = new Date(date).getTime();
          myDataTable.draw();
        }
      }).keyup(function() {
        maxDateFilter = new Date(this.value).getTime();
        myDataTable.draw();
      });
  
      // The below code actually does the date filtering.
      minDateFilter = "";
      maxDateFilter = "";
  
      $.fn.dataTableExt.afnFiltering.push(
        function(oSettings, aData, iDataIndex) {
          if (typeof aData._date == 'undefined') {
            aData._date = new Date(aData[3]).getTime(); // Your date column is 3, hence aData[3].
          }
  
          if (minDateFilter && !isNaN(minDateFilter)) {
            if (aData._date < minDateFilter) {
              return false;
            }
          }
  
          if (maxDateFilter && !isNaN(maxDateFilter)) {
            if (aData._date > maxDateFilter) {
              return false;
            }
          }
  
          return true;
        }
      );
}