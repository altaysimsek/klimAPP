const express = require('express')
const path = require('path') // yollara erişmek için
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//dinamik görünteleme motoru olarak hbs kullandık. Ve görüntü dosyalarının yerini belirttik.
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Statik dosyaların bulunduğu yeri belirttik.
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'WeatherAPP ',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help',
        name: 'Altay Simsek'
    })
})


app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'Herhangi bir adres belirtilmemiş.'
        })
    }else{
        geocode(req.query.address,(error, {long, lat , location} = {}) => {
            if(error){
                return res.send({
                    error: error
                })
            }else{
                forecast(long,lat,(error,{anlik,daily} = {})=>{
                    if(error){
                        return res.send({
                            error: error
                        })
                    }else{
                        return res.send({
                            location: location,
                            input: req.query.address,
                            anlik: anlik,
                            daily: daily

                        })
                    }
                    
                })
            }
        })
    }
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        message: 'Böyle bir sayfa bulunamadı',
        name: 'Nysler Hayatta',
    })
})

app.listen(3000,() => {
    console.log('Server is up on port 3000')
})