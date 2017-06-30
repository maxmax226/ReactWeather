const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0f9a04512779411d2d77dc7e02c7fcbc';

module.exports = {
  getTemp(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    return axios.get(requestUrl)
      .then((response) =>{
        console.log(response);
        if(response.data.cod && response.data.message){
          throw new Error(response.data.message);
        }else{
          return {
            temp: Math.round(response.data.main.temp)/10,
            location: response.data.name
          };
        }
      },(error) =>{
        //console.log(response.response);
        throw new Error(error.response.data.message);
      })
  }
}