const chalk = require('chalk');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const command = process.argv[2];

if(!command){
    console.log(`Pls provide an address`)
}else {
    geocode(`${command}`, (error, data) =>{
        if(error){
            console.log(chalk`{inverse.red Error: ${error}}`);
        }else{
            console.log(`Location: ${data.location}`);
            forecast(data.latitude, data.longitude, (error, data) =>{
                if(error){
                    console.log(chalk`{inverse.red Error: ${error}}`);
                }else{
                    console.log(`the temperature currently is ${data.temperature} and wind speed is calculated to be ${data.windSpeed}`)
                }
            });
        }
    });

}


