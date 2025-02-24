const express = require('express')
const path = require('path');
require('dotenv').config();



const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// config template engine
app.set('views', path.join(__dirname ,'views'))
app.set('view engine', 'ejs')

// config static files
app.use(express.static('public'))

// declare route
app.get('/', (req, res) => {
  res.send('Hello World! Phuc')
})

app.get('/abc', (req, res) => {
  res.render('sample.ejs')
})

// make sure shit work
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})