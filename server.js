// base setup 

// calling the packages that required

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// configuring the app using the bodyPraser
// this will allow us to get data from a POST request

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var port = process.env.PORT || 8080 // setting of port, can be 4000

// routes for the api

var router = express.Router() // instance of the router

// test route to ensure everything is working 
// which can be accessed by locallost:8080

router.get('/', (req, res) => {
  res.json({ message: 'horray! Welcome to our api!'})
})

/// register the routes
// all routes will be prefix with /api
app.use('/api', router)

// starting of the server
app.listen(port)
console.log('watch out, we got a badass port at: ' + port)
