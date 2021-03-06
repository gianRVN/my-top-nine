
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const router = require('./router/index')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`listening at port ${port}`)
})
