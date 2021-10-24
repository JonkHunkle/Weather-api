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
      console.log(data);
      var windSpeed = data.list[0].wind.speed;
      var weatherIcon = data.list[0].weather[0].icon;
      var humidity = data.list[0].main.humidity;
      var temp = data.list[0].main.temp;
      var cityName = data.city.name;
      var iconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;

      var currentHTML = $(`
      <span>
      <h3>Current Weather!</h3>
      <h5>${cityName}</h5>
      <ul>~~Todays Information~~
      <li>Temperature: ${temp}</li>
      <li>Humidity: ${humidity}</li>
      <li>Wind Speed: ${windSpeed}</li>
      <img src='${iconURL}'>
      </ul>
      </span>
      `);
      $("#currentWeather").append(currentHTML);
      for (let i = 0; i < data.list.length; i += 8) {
        windSpeed = data.list[i].wind.speed;
        weatherIcon = data.list[i].weather[0].icon;
        humidity = data.list[i].main.humidity;
        temp = data.list[i].main.temp;
        cityName = data.city.name;
        console.log(temp);
        iconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
        var futureWeather = $(`
         <span>
         <li>Temperature: ${temp}</li>
         <li>Humidity: ${humidity}</li>
         <li>Wind Speed: ${windSpeed}</li>
         <img src='${iconURL}'>
         </span>
         `);
        $("#forecast").append(futureWeather);
      }
    });
});

//click the button and loop through the data to make 5 minicard
