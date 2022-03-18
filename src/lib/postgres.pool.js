/*
  ? Las conexiones que se hacen de la forma normal no son buenas porque cada vez que hacen una petición, abren una
  ? nueva conexión. Para corregirlo hacemos la conexion tipo pool, donde la primer petición hecha, mantiene la
  ? conexión abierta para el resto
*/

const { Pool } = require('pg')
const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser) //Estos dos metodos son para proteger los datos más privados de la URL
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}` // Conexion recomendada
//Sí la DB la tenemos en algun servicio como Amazón o Digital Ocean, lnos entregarán la URL como la anterior

const pool = new Pool({
  connectionString: URI //Así si nos conectamos por medio de string
})

module.exports = pool
