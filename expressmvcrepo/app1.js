const express = require('express')
const app = express()
const empRouter = require('./routes/empRouter')

app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use("/api/v1/",empRouter)

module.exports= app

//create a rest api for tours and travels using mvc architecture
//https://github.com/shivika24/tourism-project/blob/master/db.json
//1) show all states and their capital
//2) show product details for a given state name
//3)Add a new state and its products
//4)remove product of specific product from state 

//data: data file
//server.js
//staterouter
//tourapihandler
//config.env