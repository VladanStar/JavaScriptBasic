// https://www.discoveryvip.com/shared/json.php?f=books2

// https://www.discoveryvip.com/shared/json.php?f=books1

const url = "https://www.discoveryvip.com/shared/json.php?f=books1";
const output = document.querySelector('.output');
fetch(url).then(function (res) {
  return res.json()
}).then(function (data) {
  console.log(data.books);
  data.books.forEach(function (val) {
    output.innerHTML += val.title + '<br>';
  })
}).catch(function (error) {
  console.log(error);
})