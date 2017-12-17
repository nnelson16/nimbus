#Synopsis
An unofficial node client for Weather Undergound APIs. Provides a simple interface to obtain weather data.

#Code Examples
```javascript
//include the client
const clima = require('clima');

/*
"Data Features" refers to things like current conditions, forecasts etc.
Currently, the supported Data Features include everything offered in
Weather Undergound's free tier:
* Geolookup
* Autocomplete
* Current Conditions
* 3 day forecast summary
* Astronomy
* Almanac for Today
*/

/*
The <DATA_FEATURE> can be replaced by geolookup, conditions, forecast, almanac or astronomy.
Autocomplete is its own API which will be discussed further down in this README.
*/
const dataFeature = clima.getDataFeaturesService('<API_KEY>', '<DATAFEATURE>');

/*
You can obtain weather data through any of the following ways:
* US City and state
* US Zipcode
* City and Country
* Latitude and Longitude
* Airport Code
* Personal Weather Station ID
* Current IPv4 address
* Specific IPv4 address
*/
dataFeature.getDataByCityAndStateUS('<City>', '<State>');
dataFeature.getDataByZipCodeUS('<5 digit Zipcode>');
dataFeature.getDataByCityAndCountry('<City>', '<Country>');
dataFeature.getDataByLatAndLong(<Latitude>,<Longitude>);
dataFeature.getDataByAirportCode('<Airport Code>');
dataFeature.getDataByPersonalWeatherStation('<Personal Weather Station ID>');
dataFeature.getDataByIPAuto();
dataFeature.getDataBySpecificIP('<IPv4 address>');

/*
Each of the aforementioned methods returns a Promise. In order to use the data
returned by these methods, you can chain a then, catch callback like so:
*/
dataFeature.getDataByCityAndStateUS('San Francisco', 'CA')
  .then(function(data) {
    //your code for handling data goes here
  })
  .catch(function(error) {
    //your code for handling data goes here
  });

/*
The AutoComplete API returns  list of locations or hurricanes which match against a partial query.
It does not require using an API key.
*/

const autoComplete = clima.getAutoCompleteService();

/*
You can obtain said lists through any of the following ways:
* Search by city
* Search by city with country code
* Search by hurricane
* Search by hurricane and city
*/

autoComplete.searchByCity('<Query for city>');
autoComplete.searchByCityWithCountryCode('<Query for city>', '<Country Code>');
autoComplete.searchByHurricane('<Query for hurricane>');
autoComplete.searchByHurricaneAndCity('<Query for city and/or hurricane>')

/*
As seen with Data Features, each of the aforementioned methods returns a Promise.
In order to use the data returned by these methods, you can chain a then, catch callback like so:
*/
autoComplete.searchByCity('San F')
  .then(function(data) {
    //your code for handling data goes here
  })
  .catch(function(error) {
    //your code for handling data goes here
  });
```

#Installation
```
npm install clima
```

#API Reference
Weather Underground API docs: https://www.wunderground.com/weather/api/d/docs?d=index

#License
MIT
