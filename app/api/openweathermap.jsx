let Axios = require('axios');

const OPEN_WEATHER_MAP_URL =  'http://api.openweathermap.org/data/2.5/weather';
const APPID = "8bc9d212b42188a7755aa9ebdf88c688";
module.exports = {
    getTemp : (location) => {
        "use strict";
        let encoded_location = encodeURIComponent(location);
        let request_url = `${OPEN_WEATHER_MAP_URL}?q=${encoded_location}&appid=${APPID}`;
        return Axios.get(request_url)
            .then((response) => {
                if (response.data.cod && response.data.messsage){
                    throw new Error(response.data.message);
                }else{
                    return response.data.main.temp;
                }
            },(response) => {
                console.log(response);
                throw new Error(response.data.message);
            })
    }
};
