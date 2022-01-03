const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//dotenv
require('dotenv').config()
const PORT = process.env.PORT;

//CORS
var cors = require('cors')
app.use(cors())

//Endpoints
const heroes = require('./controllers/heroes');
const { createBrotliDecompress } = require('zlib');

//Knex
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB,
      port : process.env.DB_PORT
    }
  });

app.get('/', (req, res) => res.send('¡Hola Antware!'))

app.get('/getHeroes', (req, res) => {
    console.log("Obteniendo heroes")
    heroes.getHeroes(req, res, knex)
})

app.listen(PORT, () => console.log(`Server Running in port ${PORT}`));