const request = require('request')

/*
const darkskyurl = 'https://api.darksky.net/forecast/7de5bc7427e68c69f6d252b2bad3195b/37.8267,-122.4233'
request({url:darkskyurl,json : true},(error, response) => {
    if(error){
        console.log('error')
    }else if(response.body.error){
        console.log('unbale to find location')
    }else{
        console.log(response.body);
    }
    //console.log(response.body);
})
*/

/*
const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3dhcG5pbG5hZ2FvbmthciIsImEiOiJjand4Ym1zczcxMzhpNDFtb2hrbm9oYzQyIn0.VH7cHUj_XYw4lYBHJf1VFg';
request({url:geocodingURL,json : true},(error, response) => {
    
    if(error){
        console.log('not conected');
    }else if( 0 && response.body){
        
    }else{
        const lat = response.body.features[0].center[0]
    const lang = response.body.features[0].center[1]
        console.log(lat,lang);
    }
})
*/

//console.log('>>>>>>>>>>>>>>>>>>>>>>>');

const forecast = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3dhcG5pbG5hZ2FvbmthciIsImEiOiJjand4Ym1zczcxMzhpNDFtb2hrbm9oYzQyIn0.VH7cHUj_XYw4lYBHJf1VFg';
    request({url:url,json : true},(error, response) => {
    
        if(error){
            callback('not connected to api', undefined);
            
        }else if(response.body.features.length === 0){
            callback('try again', undefined);
        }else{
            callback(undefined,{
                latitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                place_name : response.body.features[0].place_name
            });
        }
    })
}

module.exports = forecast
// geocode('pen, raigad', (error , data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// })