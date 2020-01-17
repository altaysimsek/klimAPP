const request = require('request')
const keys = require('./key')


/*
Long : parametre
Lat : parametre
callback : callback fonksiyonu -> callback(error,data)
*/


const forecast = (long,lat,callback)=>{
    const url = 'https://api.darksky.net/forecast/'+ keys.darkSkyKey +'/' +encodeURIComponent(long)+','+encodeURIComponent(lat) + '?units=si&lang=tr'
    request({url,json: true},(error,{body})=>{
        if(error){
            callback('Web Servisi istekleri cevaplayamıyor.',undefined)
        }else if (body.error != undefined){
            callback(body.error)
        }else{
            callback(undefined,{
                anlik: {
                    sicaklik: body.currently.temperature,
                    summary: body.currently.summary,
                    icon: body.currently.icon,
                    windSpeed: body.currently.windSpeed,
                    pressure: body.currently.pressure,
                    humidity: body.currently.humidity
                },
                daily: {
                    summary: body.daily.summary,
                    icon: body.daily.icon,
                    data : body.daily.data
                }
                

            })
        }
    })
}

module.exports = forecast