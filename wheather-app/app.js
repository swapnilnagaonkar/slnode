const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address  = process.argv[2]

if(!address){
    console.log('Please provide the address')
}else{

    geocode(address, (error , data) => {
    if(error){
        return console.log('Error', error);   
    }

        forecast(data.latitude,data.longitude, (error , forecastdata) => {
            if(error){
                return console.log(error);
            }
        console.log('geodata', data);
        console.log('forecast data', forecastdata);
    })
    })


}