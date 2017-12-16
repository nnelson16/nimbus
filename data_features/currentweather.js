const axios = require('axios');

module.exports = function(apiKey) {
  axios.defaults.baseURL = 'http://api.wunderground.com/api/'+apiKey+'/conditions/q/';
  var currentWeather = {};
  currentWeather.getWeatherByCityAndStateUS = function(city, state) {
    return axios.get(state+'/'+city+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  currentWeather.getWeatherByZipCodeUS = function(zipCode) {
      return axios.get(zipCode+'.json')
        .then(function(response) {
          return response;
        })
        .catch(function(error) {
          return error;
        });
  };

  currentWeather.getWeatherByCityAndCountry = function(city, country) {
    return axios.get(country+'/'+city+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  currentWeather.getWeatherByLatAndLong = function(latitude, longitude) {
    return axios.get(latitude+','+longitude+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  currentWeather.getWeatherByAirportCode = function(airportCode) {
    return axios.get(airportCode+'.json')
      .then(function(response) {
        return response;
      }).catch(function(error) {
        return error;
      });
  };

  currentWeather.getWeatherByPersonalWeatherStation = function(pwsId) {
    return axios.get('pws:'+pwsId+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  currentWeather.getWeatherByIPAuto = function() {
    return axios.get('autoip.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  //only supports IPv4 addresses
  currentWeather.getWeatherBySpecificIP = function(ipAddress) {
    return axios.get('autoip.json?geo_ip='+ipAddress)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };
  return currentWeather;
};
