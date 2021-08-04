console.log('hiii')
const timeCheck = require('./Open/middleware')
//import express
const express=require('express')
//associate the express methods to a variable
const app= express()
//create the variable port
const port = 5000
app.get('/Closed.html',(req,res)=>{
    res.sendFile(__dirname+'/Open/Closed.html')
  })
  
  app.use(timeCheck)
  app.use(express.static(__dirname + '/Open'));

//listen to the port
app.listen(port,(err)=>{
    err ? console.log(err):console.log('the server is running on port 5000')
})