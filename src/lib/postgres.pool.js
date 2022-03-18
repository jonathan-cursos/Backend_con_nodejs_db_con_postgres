/*
  ? Las conexiones que se hacen de la forma normal no son buenas porque cada vez que hacen una petición, abren una
  ? nueva conexión. Para corregirlo hacemos la conexion tipo pool, donde la primer petición hecha, mantiene la
  ? conexión abierta para el resto
*/

const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'admin123',
  database: 'control_monitoreo'
})

module.exports = pool
