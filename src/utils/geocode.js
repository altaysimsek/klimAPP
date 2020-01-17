const request = require('request')
const keys = require('./key')

/*
    callback returns an object:
    {
        long:,
        lat:,
        location:,
    }

*/

const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token='+keys.mapBoxKey
    request({url,json: true},(error,{body})=>{
        if(error){
            callback('Web Servisi istekleri cevaplayamıyor.',undefined)
        }else if(body.features.length === 0){
            callback('Aradığınız lokasyon bulunamıyor. Lütfen bir başka lokasyonu deneyin.',undefined)
        }else{
            callback(undefined,{
                long:body.features[0].center[1],
                lat:body.features[0].center[0],
                location:body.features[0].place_name

            })
        }
    })
}

module.exports = geocode