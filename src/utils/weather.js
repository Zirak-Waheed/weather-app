const geocode = require("./geocode")
const forecast = require("./forecast")

const weather = (address, callback) => {
  geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (latitude && longitude && location){
      forecast(latitude, longitude, location, callback)
    } else
    {
      callback('No location matched', undefined)
    }
  })
}

module.exports =  weather
