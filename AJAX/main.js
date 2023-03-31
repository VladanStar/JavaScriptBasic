
let f =fetch('https://6426b703d24d7e0de4765ab5.mockapi.io/player')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
