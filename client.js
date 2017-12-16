const dataFeatures = require('./data_features/datafeatures.js');
const autocomplete = require('./autocomplete/autocomplete.js');
module.exports = function () {
  var weatherClient = {};
  weatherClient.getDataFeaturesService = dataFeatures;
  weatherClient.getAutoCompleteService = autocomplete;
  return weatherClient;
};
