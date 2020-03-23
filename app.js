const forecast = require('./weather.js');
const cityName = process.argv.slice(2).join("_").replace("_"," ");
forecast.get(cityName);