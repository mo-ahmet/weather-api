const request = require('request')

const geoCode = require('./geocode')
const forecast = require('./forecast')

const adress = process.argv[2]

if (!adress) {
    console.log('Please provide and adress')
} else {
    geoCode(adress, (error, {latitude, longitude, location} = {}) =>{
        if (error) {
            return console.log(error)
        }
        forecast(latitude ,longitude, (forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(`Location: ${location}, Forecast: ${forecastData}`)
        })
    })
}



