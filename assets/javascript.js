//var userInput = $("#input").val();
var apiKey = "2bf99479dca2bf85a5edb5e80183a5b0";
//var requestUrl = `api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`;

//console.log(requestUrl);

$("#hello").on("click", function () {
  var userInput = $("#input").val();
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`;
  console.log("click", $("#input").val());
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  console.log(requestUrl);
});
