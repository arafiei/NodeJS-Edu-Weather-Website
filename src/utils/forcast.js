const request = require('request')

const forcast =  (latitude,longitude,callback) => {
        const url = 'https://api.darksky.net/forecast/7581490494d58443b2a14838b21dd6c3/'+latitude+','+longitude +'?units=si&lang=en'
    
        request( {url,json: true },(error,{body}) => {
            if(error) {
                callback('Unable to connect to weather service!',undefined)
            } else if(body.error){
                callback('Unable to find location, try again',undefined)
            }
            else {
                callback(undefined,' It is currently ' +
                 body.currently.temperature + ' degrees.' + body.daily.data[0].summary + 'There is a ' + body.currently.precipProbability + '%  chance of rain. ' )
        
            }
        })
    
    }
    

module.exports = forcast