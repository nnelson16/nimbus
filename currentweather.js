const axios = require('axios');
module.exports = function(apiKey) {
  var currentweather = {};
  currentweather.getWeatherByCityAndState = function(city, state) {
    axios.get('http://api.wunderground.com/api/'+apiKey+'/conditions/q/'+state+'/'+city+'.json')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  
  return currentweather;
};
