// https://services.odata.org/V3/Northwind/Northwind.svc/Products/

let grid = document.querySelector(".products");
fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Products/")
  .then((res) => res.json())
  .then((data) => console.log(data.value));

function addElement(appendIn, value) {
  let div = document.createElement("div");
  div.className = "item justify-self-center";

  let { name, title, category, price } = value.value;
  div.innerHTML = `
    <img src="https://www.slikomania.rs/fotky6509/fotos/CWFFL036.jpg" class="bg-cover img">
    <div class="text-center py-3 font-poppins">
        <h3 class="text-lg title">${name}</h3>
        <a href="$" class="block"><span class="text-sm text-red-400">${category}</span></a>
        <span class="block py-3">$ <span class="text-md">${price}</span></span>
        <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Bay Now</button>
    </div>
    `;
  appendIn.appendChild(div);
}
