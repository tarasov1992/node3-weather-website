const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cf215db342b99ce6b3f1b56c2d1a4baa&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined)
        } else if (body.error) {
            console.log('Unable to find location!', undefined)
        } else {
            callback(
                undefined, 
                body.current.weather_descriptions[0] + '. It\'s currently ' + body.current.temperature + ' degrees out.' + ' It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast