const axios = require('axios');
module.exports = function (appId) {
  var weatherClient = {};

  //get current weather
  weatherClient.getCurrentWeather = function() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID='+appId)
      .then(function (response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return weatherClient
};
