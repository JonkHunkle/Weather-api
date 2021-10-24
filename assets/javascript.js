//current and future conditions for that city and that city is added to the search
//history
//city name, the date, an icon representation of weather conditions, the temperature,
// the humidity, the wind speed, and the UV index
//presented with a color that indicates whether the conditions are favorable, moderate,
// or severe
//5-day forecast that displays the date, an icon representation of weather conditions,
// the temperature, the wind speed, and the humidity

//var userInput = $("#input").val();
var apiKey = "2bf99479dca2bf85a5edb5e80183a5b0";
//var requestUrl = `api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`;

//console.log(requestUrl);

$("#hello").on("click", function () {
  var userInput = $("#input").val();
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${apiKey}&units=imperial`;
  console.log("click", $("#input").val());
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var windSpeed = data.list[0].wind.speed;
      var weatherIcon = data.list[0].weather[0].icon;
      var humidity = data.list[0].main.humidity;
      var temp = data.list[0].main.temp;
      var cityName = data.city.name;
      console.log(cityName);
      console.log(temp);
      console.log(humidity);
      console.log(`http://openweathermap.org/img/wn/${weatherIcon}.png`);
      console.log(data);
    });
});
