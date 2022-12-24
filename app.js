const weather = require('./weather_openweathermap');

lat = 34.020882;
long=-6.841650;

weather.getWeather(lat,long, (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log('voici les informations meteo pour la ville de '+ data['timezone']);
  const infos = new Map();
  infos.set('temperature',data['current']['temp']);
  infos.set('humidité',data['current']['humidity']);
  infos.set('vitesse du vent',data['current']['wind_speed']);
  infos.set('pression',data['current']['pressure']);
  console.log(infos);
});

