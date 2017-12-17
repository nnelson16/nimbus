const dataFeatures = require('./data_features/datafeatures.js');
const autoComplete = require('./autocomplete/autocomplete.js');
module.exports = function () {
  var weatherClient = {};
  weatherClient.getDataFeaturesService = dataFeatures;
  weatherClient.getAutoCompleteService = autoComplete;
  return weatherClient;
};
