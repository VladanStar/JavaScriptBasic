// fetch(
//   "https://services.odata.org/V3/Northwind/Northwind.svc/Customers"
// ).then((data) => {
//     return data.json()
// }). then((objectData)=>{
//     console.log(objectData)
// })

fetch('https://services.odata.org/V3/Northwind/Northwind.svc/Order_Details', {
  method: 'post',
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
//   body:JSON.stringify(options)
}).then(function(res){
  return res.json(); //error here
}).then(function(data){
  console.log(data[0].title);
}).catch((error) => {
  console.log(error);
});
