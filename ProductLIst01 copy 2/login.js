let customersUrl =
  "https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json";
let customers = getServiceData(customersUrl).value;


document.getElementById("loginBtn").addEventListener("click", function () {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  login(user, pass, customers);
});

function login(user, pass, customers) {
  let userLogin = false;
  for (let i in customers) {
    if (customers[i].CustomerID === user && customers[i].CustomerID == pass) {
      userLogin = true;
      break;
    }
  }
  if (userLogin) {
    sessionStorage.setItem("userLogin", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerHTML = "Invalid data";
  }
}

function getServiceData(url, username, password) {
  try {
    let result;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          result = JSON.parse(xmlhttp.response);
        } else {
          return false;
        }
      }
    };
    xmlhttp.open("GET", url, false, username, password);
    xmlhttp.send();
    return result;
  } catch (err) {
    return err;
  }
}
export let userE = document.getElementById("user");

