const request = require('request')


const geoCode = (adress, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=16e029b0a6187bf08e15ebf7de064046&query=${encodeURIComponent(adress)}&limit=1`
    request ({url: url, json: true}, (e,{body}) =>{
        if(e) {
            callback('Unable to connect to location service')
        }
        else if (body.data.length === 0) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}

module.exports = geoCode