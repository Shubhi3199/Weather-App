const chalk = require('chalk');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const command = process.argv[2];

if(!command){
    console.log(`Pls provide an address`)
}else {
    geocode(`${command}`, (error, {location, latitude, longitude}) =>{
        if(error){
            console.log(chalk`{inverse.red Error: ${error}}`);
        }else{
            console.log(`Location: ${location}`);
            forecast(latitude, longitude, (error, {temperature, windSpeed}) =>{
                if(error){
                    console.log(chalk`{inverse.red Error: ${error}}`);
                }else{
                    console.log(`the temperature currently is ${temperature} and wind speed is calculated to be ${windSpeed}`)
                }
            });
        }
    });

}


