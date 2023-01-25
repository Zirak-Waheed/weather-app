const request = require("request")

const geocode = (address, callback) => {
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiemlyYWsiLCJhIjoiY2xkOGlubzdyMHd5dDNvdGF5Znowc3kxOCJ9.cuc7Ak8C4iTPDIrTWv4D4w&limit=1"

  request({url, json: true}, (error, { body }) => {
    if (error || !body) {
      callback("couldn't connect to geocoding service", undefined)
    } else if (body.error) {
      callback(body.error, undefined)
    }
    else if (body.features.length == 0) {
      callback("no record found", undefined)
    } else {
      const data  = body.features[0]
      callback(undefined, {
        longitude: data.center[0],
        latitude: data.center[1],
        location: data.place_name
      })
    }
  })
}

module.exports = geocode
