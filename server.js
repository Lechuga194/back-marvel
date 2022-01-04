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

//Knex LOCAL
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//       host : process.env.DB_HOST,
//       user : process.env.DB_USER,
//       password : process.env.DB_PASSWORD,
//       database : process.env.DB,
//       port : process.env.DB_PORT
//     }
//   });

//Knex para Heroku
const knex = require('knex')({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
});

app.get('/', (req, res) => res.send('¡Hola Antware!'))

//Obtiene todos los heroes
app.get('/getHeros', (req, res) => {
    heroes.getHeros(req, res, knex)
})

//Obtiene un heroe por medio de su ID
app.get('/getHero/:id', (req, res) => {
  heroes.getHero(req, res, knex)
})

//Crea un heroe
app.post('/createHero', (req, res) => {
    heroes.createHero(req, res, knex)
})

//Elimina un heroe por medio de su ID
app.delete('/deleteHero/:id', (req, res) => {
    heroes.deleteHero(req, res, knex)
})

//Actualiza un heroe
app.post('/updateHero', (req, res) => {
  heroes.updateHero(req, res, knex)
})

app.listen(PORT, () => console.log(`Server Running in port ${PORT}`));