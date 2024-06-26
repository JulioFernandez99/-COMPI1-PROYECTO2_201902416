'use strict'
const express = require('express')
const bodParser = require('body-parser')
let cors = require('cors')

const app = express()
const parser = require('./analizador')

app.use(bodParser.json({limit:'50mb', extended:true}))
app.use(bodParser.urlencoded({limit:'50mb', extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    var respuesta={
        message:"Todo bien"
    }
    res.send(respuesta)
})

const analizar = require('./endpoints/analizador')(parser, app)
app.listen('5000', ()=>{
    console.log("Server on port 5000")
})