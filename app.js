//npm init -y
//npm i express dotenv
//crear el archivo . env PORT=8080 sin punto y como da error

require('dotenv') .config();


const express = require('express');
const app = express();

app.get('/', function (req,res){
    res.send('Hello World') ;
});

app.listen( process.env.PORT, ( ) => {
    console.log('Servidor corriendo en puerto', process.env.PORT);
});