const currentWeather = require('./data_features/currentweather.js');
module.exports = function (apiKey) {
  var weatherClient = {};
  //json object that contains methods for getting current weather conditions
  weatherClient.getCurrentWeather = currentWeather(apiKey);
  return weatherClient;
};
