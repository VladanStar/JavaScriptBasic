function show() {
  let api_key = "at_abezKKYdFLFcWQA78CM8eF9ff2l4";


  fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_abezKKYdFLFcWQA78CM8eF9ff2l4m"
  )
    .then((data) => data.json())
    .then(function (data) {
 
      console.log(data.location.city);
      console.log(data.location);
      console.log(data.location.geonameId);
      console.log(data.location.lat);
      console.log(data.location.lng);


    });
}
