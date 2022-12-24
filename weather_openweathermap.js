const request = require('request');

const API_KEY = '3782500cc96240a3f0bde12432c5eaaf';
const API_URL = 'https://api.openweathermap.org/data/3.0/onecall';

function getWeather(lat,long, callback) {
  const query = `?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  const url = API_URL + query;

  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }

    const data = JSON.parse(body);
    callback(null, data);
  });
}

module.exports = {
  getWeather,
};
