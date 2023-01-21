
  fetch("https://services.odata.org/v4/Northwind/Northwind.svc/Products/")
    .then((data) => data.json())
    .then(function (data) {
      // data = JSON.parse(data);
      console.log(data.value);
      let html = "";
      data.value.map((product) => {
        html += `
            <div class="col-3 product-container">
                <div class="card product">
                    <img 
                     src="${"https://www.slikomania.rs/fotky6509/fotos/CWFFL036.jpg"}"
                    class="card-img-top"
                    alt="${product.ProductName}"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${product.ProductID}</h5>
                        <p class="card-text">${product.QuantityPerUnit}</p>
                        <p class="card-text">${
                          product.CategoryID
                        } $ / Unidad</p>
                        <button type="button" class="btn btn-primary btn-cart" onClick="addProductCart(${
                          product.ProductID
                        })">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        console.log(product.ProductID);
      });
      document.getElementsByClassName("products")[0].innerHTML = html;
    });

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
//   buttons.map((button) => {
//     if (value.toUpperCase() == button.innerText.toUpperCase()) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });
buttons.forEach((button)=>{
    if(value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active");
    }
    else{
        button.classList.remove("active")
    }
})
  // select all card
  let elements = document.querySelectorAll(".card");
//   elements.map((element) => {
//     if (value == "all") {
//       element.classList.remove("hide");
//     } else {
//       if (element.classList.contains(value)) {
//         element.classList.remove("hide");
//       } else {
//         element.classList.add("hide");
//       }
//     }
//   });
elements.forEach((element)=>{
    if(value == "all"){
        element.classList.remove("hide");
    }
    else{
        if (element.classList.contains(value)) {
                  element.classList.remove("hide");
                 } else {
                   element.classList.add("hide");
             }
       
    }
})
}
window.onload = () => {
    filterProduct("all");
};
