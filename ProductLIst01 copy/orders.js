$(document).ready(function () {
  $("#main").hide();
  let link = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers";
  let orderLink =
    "https://services.odata.org/V3/Northwind/Northwind.svc/Order_Details";
  let productsLink =
    "https://services.odata.org/V3/Northwind/Northwind.svc/Products";
  let customers;
  $.ajax({
    url: link,
    dataType: "json",
    type: "GET",
    success: function (result) {
      console.log(result);
      customers = result.value;
      uzmiPorudzbine();
    },
    error: function (error) {
      console.error(error);
    },
  });

  function uzmiPorudzbine() {
    $.ajax({
      url: orderLink,
      dataType: "json",
      type: "GET",
      success: function (result) {
        console.log(result);
        let pordzbine = result.value;
        uzmiProizvode(pordzbine);
      },
      error: function (error) {},
    });
  }

  function uzmiProizvode(porudzbine) {
    $.ajax({
      url: productsLink,
      dataType: "json",
      type: "GET",
      success: function (res) {
        let products = res.value;
        for (const key in porudzbine) {
          const order = porudzbine[key];
          for (const key2 in products) {
            const product = products[key2];
            if (product.ProductID == order.ProductID) {
              console.log(product.ProductID);
              iscrtajProzvod(product, order);
            }
          }
        }
        console.log(products);
      },
      error: function (error) {
        console.error(error);
      },
    });
  }

  function iscrtajProzvod(proizvod, porudzbina) {
    $("<div>", {
      text:
        porudzbina.OrderID +
        " - " +
        proizvod.ProductName +
        " - " +
        proizvod.ProductID +
        " - " +
        proizvod.UnitPrice,
    }).appendTo(".demo");
  }
});
