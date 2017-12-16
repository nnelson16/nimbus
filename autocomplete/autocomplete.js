const axios = require('axios');

module.exports = function() {
  var axiosInstance = axios.create({
    baseURL: 'http://autocomplete.wunderground.com'
  });
  var autocomplete = {};

  autocomplete.searchByCity = function(queryString) {
    return axiosInstance.get('/aq?query='+queryString.trim())
          .then(function(response) {
            return response;
          })
          .catch(function(error) {
            return error;
          });
  };

  autocomplete.searchByCityWithCountryCode = function(queryString, countryCode) {
    return axiosInstance.get('/aq?query='+queryString.trim()+'&c='+countryCode.trim())
          .then(function(response) {
            return response;
          })
          .catch(function(error) {
            return error;
          });
  };

  autocomplete.searchByHurricane = function(queryString) {
    return axiosInstance.get('/aq?query='+queryString.trim()+'&h=1&cities=0')
          .then(function(response) {
            return response;
          }).catch(function(error) {
            return error;
          });
  };

  autocomplete.searchByHurricaneAndCity = function(queryString) {
    return axiosInstance.get('/aq?query='+queryString.trim()+'&h=1')
          .then(function(response) {
            return response;
          }).catch(function(error) {
            return error;
          });
  }
  return autocomplete;
}
