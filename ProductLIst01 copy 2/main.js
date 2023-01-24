// https://services.odata.org/V3/Northwind/Northwind.svc/Products/
if (sessionStorage.getItem("userLogin") != "true") {
	window.location.href = "login.html";
}

function hideButton(){
  $(".container").hide();
  $(".tableD").show();
}
function showButton(){
  $(".tableD").hide();
  $(".container").show();
}


document.getElementsByClassName('tableD')[0].style.display = "none";
let grid = document.querySelector(".products");
fetch("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json")
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
 // console.log(filterValue);
  let item = grid.querySelectorAll('.item');
//console.log(item)
  for (let i = 0; i < item.length; i++) {
    let span = item[i].querySelector('.name');
   // console.log(span)
    if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item[i].style.display = "initial";
    } else {
      item[i].style.display = "none";
    }
  }
}
function addElement(appendIn, value) {
 // console.log(value);
  let div = document.createElement("div");
  div.className = "item justify-self-center";

  //   let { ProductID, ProductName, CategoryID, UnitPrice } = value;
 console.log(value);
 let name = value.ProductName;
  div.innerHTML = `
    <img src="https://i.pinimg.com/200x/c9/70/08/c97008bfe5d6b7543728d1a777160507.jpg" class="bg-cover img"alt="img">
    <div class="text-center py-3 font-poppins card">
        <h3 class="text-lg title name"> Name: ${name}</h3>
        <h3 class="text-lg"> Product ID ${value.ProductID}</h3>
        <a href="$" class="block"><span class="text-sm text-red-400"> Discontinued: ${value.Discontinued}</span></a>
        <span class="block py-3"><span class="text-md"> Category ID: ${value.CategoryID}</span></span>
        <span class="block py-3"> <span class="text-md"> QuantityPerUnit: ${value.QuantityPerUnit}</span></span>
        <span class="block py-3"><span class="text-md"> UnitPrice: ${value.UnitPrice}</span></span>

        <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Bay Now</button>
    </div>
    `;

  appendIn.appendChild(div);
}
