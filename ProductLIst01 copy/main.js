// https://services.odata.org/V3/Northwind/Northwind.svc/Products/

let grid = document.querySelector(".products");
fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Orders/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.value);
    for (let value of data.value) {
      addElement(grid, value);
    }
  });

//add event listener

let filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", filterProducts);

// callback function
function filterProducts() {
  let filterValue = filterInput.value.toUpperCase();
  console.log(filterValue);
  let item = grid.querySelectorAll('.item');
console.log(item)
  for (let i = 0; i < item.length; i++) {
    let span = item[i].querySelector('.name');
    console.log(span)
    if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item[i].style.display = "initial";
    } else {
      item[i].style.display = "none";
    }
  }
}
function addElement(appendIn, value) {
  console.log(value);
  let div = document.createElement("div");
  div.className = "item justify-self-center";

  //   let { ProductID, ProductName, CategoryID, UnitPrice } = value;
  console.log(value);
 let name = value.ShipName;
  div.innerHTML = `
    <img src="https://www.slikomania.rs/fotky6509/fotos/CWFFL036.jpg" class="bg-cover img">
    <div class="text-center py-3 font-poppins">
        <h3 class="text-lg title name"> Name: ${name}</h3>
        <h3 class="text-lg"> CustomerID${value.CustomerID}</h3>
        <a href="$" class="block"><span class="text-sm text-red-400"> Order ID: ${value.OrderID}</span></a>
        <span class="block py-3"><span class="text-md"> ShippedDate:${value.OrderDate}</span></span>
        <span class="block py-3"> <span class="text-md"> RequiredDate: ${value.ShippedDate}</span></span>
        <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Bay Now</button>
    </div>
    `;

  appendIn.appendChild(div);
}
