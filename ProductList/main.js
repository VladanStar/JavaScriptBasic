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
                    
                      <div class="card-body">
                      <img
                      src="${"https://www.slikomania.rs/fotky6509/fotos/CWFFL036.jpg"}"
                     class="card-img-top"
                     alt="${product.ProductName}"
                     />
                     <h5c lass="card-title">${product.ProductName}</h5>
                          <p class="card-title"> id: ${product.ProductID}</p >
                          <p class="card-text"> quantity:${product.QuantityPerUnit} </p>
                          <p class="card-text"> id category: ${product.CategoryID} </p>
                          <button type="button" class="btn btn-primary btn-cart" onClick="addProductCart(${
                            product.ProductID
                          })">Add to Cart</button>
                      </div>
                  </div>
              </div>
          `;
      console.log(product.ProductID);

      document.getElementsByClassName("products")[0].innerHTML = html;
    });
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
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  // select all card
  let elements = document.querySelectorAll(".product-container");
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
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
window.onload = () => {
  filterProduct("all");
};
//   let card = document.createElement("div");
//   card.classList.add("card", "product.category");
//   let imgContainer = document.createElement("div");

//   imgContainer.classList.add("image-container");
//   let image = document.createElement("img");
//   image.setAttribute( "src",product.img);
//   image.src ="https://www.slikomania.rs/fotky6509/fotos/CWFFL036.jpg"
//   imgContainer.appendChild(image);
//   card.appendChild(imgContainer);
//   document.getElementById("products").appendChild(card);
//   let container = document.createElement("div");
//   container.classList.add("container");
//   let name = document.createElement("h5");
//   name.classList.add("product-name");
//   name.innerText = product.ProductName.toUpperCase();
//   container.appendChild(name);

//   card.appendChild(container);
//   let price = document.createElement("h6");
//   price.innerText = product.UnitPrice;
//   container.appendChild(price);
//   let productID = document.createElement("h6");
//   price.innerText = product.ProductID;
//   container.appendChild(productID);
