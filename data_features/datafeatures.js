const axios = require('axios');

module.exports = function(apiKey, dataFeature) {
  apiKey = apiKey.trim();
  dataFeature = dataFeature.trim();
  var axiosInstance = axios.create({
    baseURL: 'http://api.wunderground.com/api/'+apiKey+'/'+dataFeature+'/q/'
  });
  var dataFeature = {};

  dataFeature.getDataByCityAndStateUS = function(city, state) {
    return axiosInstance.get(state+'/'+city.trim()+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByZipCodeUS = function(zipCode) {
      return axiosInstance.get(zipCode.trim()+'.json')
        .then(function(response) {
          return response;
        })
        .catch(function(error) {
          return error;
        });
  };

  dataFeature.getDataByCityAndCountry = function(city, country) {
    return axiosInstance.get(country.trim()+'/'+city.trim()+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByLatAndLong = function(latitude, longitude) {
    return axiosInstance.get(latitude+','+longitude+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByAirportCode = function(airportCode) {
    return axiosInstance.get(airportCode.trim()+'.json')
      .then(function(response) {
        return response;
      }).catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByPersonalWeatherStation = function(pwsId) {
    return axiosInstance.get('pws:'+pwsId.trim()+'.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  dataFeature.getDataByIPAuto = function() {
    return axiosInstance.get('autoip.json')
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };

  //only supports IPv4 addresses
  dataFeature.getDataBySpecificIP = function(ipAddress) {
    return axiosInstance.get('autoip.json?geo_ip='+ipAddress.trim())
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };
  return dataFeature;
};
