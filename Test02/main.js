// I changed some of the start_date values to be more recent, just for testing.
var myTableData = [{
    "id": "1",
    "name": "Tiger Nixon",
    "position": "System Architect",
    "salary": "$320,800",
    "start_date": "2017/04/25",
    "office": "Edinburgh",
    "extn": "5421"
  },
  {
    "id": "2",
    "name": "Garrett Winters",
    "position": "Accountant",
    "salary": "$170,750",
    "start_date": "2018/07/25",
    "office": "Tokyo",
    "extn": "8422"
  },
  {
    "id": "3",
    "name": "Ashton Cox",
    "position": "Junior Technical Author",
    "salary": "$86,000",
    "start_date": "2019/01/12",
    "office": "San Francisco",
    "extn": "1562"
  },
  {
    "id": "4",
    "name": "Cedric Kelly",
    "position": "Senior Javascript Developer",
    "salary": "$433,060",
    "start_date": "2018/03/29",
    "office": "Edinburgh",
    "extn": "6224"
  },
  {
    "id": "5",
    "name": "Airi Satou",
    "position": "Accountant",
    "salary": "$162,700",
    "start_date": "2018/11/28",
    "office": "Tokyo",
    "extn": "5407"
  },
  {
    "id": "6",
    "name": "Brielle Williamson",
    "position": "Integration Specialist",
    "salary": "$372,000",
    "start_date": "2018/12/02",
    "office": "New York",
    "extn": "4804"
  },
  {
    "id": "7",
    "name": "Herrod Chandler",
    "position": "Sales Assistant",
    "salary": "$137,500",
    "start_date": "2018/08/06",
    "office": "San Francisco",
    "extn": "9608"
  }
];

var myDataTable = $('#staff').DataTable({
  sDom: 't',
  data: myTableData,
  columns: [{
      title: 'Name',
      data: 'ProductName'
    },
    {
      title: 'Position',
      data: 'ProductID'
    },
    {
      title: 'Office',
      data: 'CategoryID'
    },
    {
      title: 'Unit Price',
      data: 'UnitPrice'
    },
    {
      title: 'QuantityPerUnit',
      data: 'QuantityPerUnit'
      
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