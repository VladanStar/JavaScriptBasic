fetch(
  "https://fakestoreapi.com/products"
).then((data) => {
    return data.json()
}).then((objectData)=>{
    console.log(objectData[0].title)
    let tableData=""
    objectData.map((values)=>{
        tableData +=`
        <tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.image}</td>
      </tr>`
        document.getElementById('table_body').innerHTML = tableData;
    })
})

// fetch('https://services.odata.org/V3/Northwind/Northwind.svc/Order_Details', {
//   method: 'post',
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   },
// //   body:JSON.stringify(options)
// }).then(function(res){
//   return res.json(); //error here
// }).then(function(data){
//   console.log(data[0].title);
// }).catch((error) => {
//   console.log(error);
// });
// var myVar = {"id" : 1};
// fetch("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json", {
//         method: "POST",
    
//         headers: {
//             "Content-Type": "text/plain"
//         },
//         body: JSON.stringify(myVar)
//     }).then(function(response) {
//         return response.text();
//     }).then(function(muutuja){
       
//     });