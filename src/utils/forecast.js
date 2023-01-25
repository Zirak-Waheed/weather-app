const request = require("request")

const forecast = (latitude, longitude, location, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=f5569f99dfdceac7a06a21c90db750ab&query=" + latitude + ',' + longitude + "&units=m"

  request({url, json: true}, (error, { body }) => {
    if (error) {
      callback("couldn't connect to weather service", undefined)
    } else if (body.error) {
      callback(body.error.info, undefined)
    } else {
      const {temperature, feelslike}  = body.current
      callback(undefined, {temperature, feelslike, location})
    }
  })
}

module.exports = forecast
