const axios = require('axios');

module.exports = function(apiKey, dataFeature) {
  axios.defaults.baseURL = 'http://api.wunderground.com/api/'+apiKey+'/'+dataFeature+'/q/';
  var dataFeature = {};
  dataFeature.getDataByCityAndStateUS = function(city, state) {
    return axios.get(state+'/'+city+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByZipCodeUS = function(zipCode) {
      return axios.get(zipCode+'.json')
        .then(function(response) {
          return response;
        })
        .catch(function(error) {
          return error;
        });
  };

  dataFeature.getDataByCityAndCountry = function(city, country) {
    return axios.get(country+'/'+city+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByLatAndLong = function(latitude, longitude) {
    return axios.get(latitude+','+longitude+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByAirportCode = function(airportCode) {
    return axios.get(airportCode+'.json')
      .then(function(response) {
        return response;
      }).catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByPersonalWeatherStation = function(pwsId) {
    return axios.get('pws:'+pwsId+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByIPAuto = function() {
    return axios.get('autoip.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  //only supports IPv4 addresses
  dataFeature.getDataBySpecificIP = function(ipAddress) {
    return axios.get('autoip.json?geo_ip='+ipAddress)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };
  return dataFeature;
};
