const currentweather = require('./currentweather.js');
module.exports = function (apiKey) {
  var weatherClient = {};
  //json object that contains methods for getting current weather conditions
  weatherClient.getCurrentWeather = currentweather(apiKey);
  return weatherClient;
};
