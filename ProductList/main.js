
function show(){
fetch('https://services.odata.org/v4/Northwind/Northwind.svc/Products/')
.then(data => data.json())
.then(function(data){
    // data = JSON.parse(data);
    console.log(data.value);
    let html = '';
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
                        <p class="card-text">${product.CategoryID} $ / Unidad</p>
                        <button type="button" class="btn btn-primary btn-cart" onClick="addProductCart(${product.ProductID})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `
        console.log(product.ProductID)
    });
    document.getElementsByClassName("products")[0].innerHTML = html;
})
}