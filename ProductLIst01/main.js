// https://services.odata.org/V3/Northwind/Northwind.svc/Products/

let grid = document.querySelector(".products");
fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.value);
    addElement(data.value)

  });

function addElement( value) {
    console.log(value)
  let div = document.createElement("div");
  div.className = "item justify-self-center";
  value.forEach((element, index) => {
  let html=""

  //   let { name, ProductName, CategoryID, price } = value;
 html += `
    <img src="https://www.slikomania.rs/fotky6509/fotos/CWFFL036.jpg" class="bg-cover img">
    <div class="text-center py-3 font-poppins">
        <h3 class="text-lg title">${element.ProductName}</h3>
        <h3 class="text-lg title">${element.ProductID}</h3>
        <a href="$" class="block"><span class="text-sm text-red-400">${element.CategoryID}</span></a>
        <span class="block py-3">$ <span class="text-md">${element.UnitPrice}</span></span>
        <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Bay Now</button>
    </div>
    `;
    console.log(element.ProductID);

      document.getElementsByClassName("show")[0].innerHTML = html;
  })
  //appendIn.appendChild(div);
}
