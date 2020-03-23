const https = require('https');
const API = require('./api.json')

const API_KEY =``;

function getWeatherForecast(cityName)
{
	try
	{
		const API_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API.key}`;
		const request = https.get(API_CALL,response=>{
			let body='';
			response.on('data',data=>{
				body += data.toString();
			});
			response.on('end',()=>{
				try
				{
					var json = JSON.parse(body);
					console.log(`Current weather of ${cityName} is ${json.main.temp} with ${json.weather[0].description}`);
				}
				catch(error)
				{
					console.error(error.message);
				}
			});
			request.on('error',err=>console.error(`Error while making request : ${err.message}`));
		});
	}
	catch(error)
	{
		console.error(error.message);
	}
}

module.exports.get = getWeatherForecast;