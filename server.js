require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/api', function(req, res, next){
  res.send('hello from API')
})

app.use(function(req, res, next){
  res.status(404).json({error: {message: "404 Not Found"}})
})

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
