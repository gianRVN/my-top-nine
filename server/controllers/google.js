const axios = require('axios');

class Controller {
  static place(req, res, next){
    axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.body.placeSearch.replace(" ","+")}+di+${req.body.location.replace(" ","+")}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then((data) => {
      console.log('berhasil yeh')
      res.status(201).json(data.data)
    })
    .catch(err => {
      console.log(err.stack, 'ini err')
    })
  }

  static detail(req, res, next){
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${value}&fields=name,rating,formatted_phone_number,reviews,website&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then((data) => {
      console.log('berhasil detail')
      res.status(201).json(data)
    })
    .catch(err => {
      console.log(err.stack, 'ini err')
    })
  }

  static photos(req, res, next){
    console.log(req.body, 'masuk photo')
    axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${req.body.photoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then((data) => {
      console.log(data.request.res.responseUrl, 'berhasil photo')
      res.status(201).json({data: data.request.res.responseUrl})
    })
    .catch(err => {
      console.log(err.stack, 'ini err')
    })
  }
}

module.exports = Controller