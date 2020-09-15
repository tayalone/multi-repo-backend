const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

app.get('/', (req, res) => {
  return res.send({ message: 'OK' })
})

app.listen(5000, (err) => {
  console.log(`app running at port 5000`)
})
