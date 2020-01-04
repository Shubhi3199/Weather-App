const chalk = require('chalk');
const request = require('request');


const url = `https://api.darksky.net/forecast/2a8eb21bbce481745faf4a864cc908ce/37.8267,-122.4233?units=si`;
request({ url: url, json: true }, (error, response) =>{
    // const data = JSON.parse(response.body);
   //    It's not necessary to use JSON.parse() every time making an HTTP request 'request' provide us many options other than url ... check docs!
    if(error){
        console.log(chalk`{inverse.red Unable to connect to weather service!}`);
    }else if(response.body.error){
        console.log(chalk`{inverse.red Unable to find location!}`)
    }else {
        const link = response.body.currently;
        console.log(`the temperature currently is ${link.temperature} and wind speed is calculated to be ${link.windSpeed}`)
    }
});
