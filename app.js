const chalk = require('chalk');
const request = require('request');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('delhi', (error, data) =>{
    if(error){
        console.log(chalk`{inverse.red Error: ${error}}`);
    }else{
        console.log(`Data: ${data.location}`);
    }


});
forecast(37, -122, (error, data) =>{
    if(error){
        console.log(chalk`{inverse.red Error: ${error}}`);
    }else{
        console.log(`the temperature currently is ${data.temperature} and wind speed is calculated to be ${data.windSpeed}`)
    }

});

