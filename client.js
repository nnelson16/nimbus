const axios = require('axios');
module.exports = function (apiKey) {
  var weatherClient = {};

  //get current weather
  weatherClient.getCurrentWeather = function() {
    axios.get('http://api.wunderground.com/api/'+apiKey+'/conditions/q/CA/San_Francisco.json')
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return weatherClient
};
