const dataFeatures = require('./data_features/datafeatures.js');
module.exports = function () {
  var weatherClient = {};
  weatherClient.getDataFeaturesService = dataFeatures;
  return weatherClient;
};
