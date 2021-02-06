const router = require('express').Router()
const Controller = require('../controllers/google')

router.post('/place', Controller.place)
router.post('/detail', Controller.detail)
router.post('/photos', Controller.photos)

module.exports = router 