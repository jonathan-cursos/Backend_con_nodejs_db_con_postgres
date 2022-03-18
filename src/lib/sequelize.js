/* 
? ORM: Es otra forma de conexión, mediante la cual usamos sus metodos de POO para realizar consultas
? sin tener que estar pensando nosotros las consultas que haremos. El mas recomendado para JS es Sequelize
? Sequelize usa la estrategia pool internamente
? Al hacer consultas, Sequalize puede tambien recibir las nuestras, no solo las que este tenga
*/
const { Sequelize } = require('sequelize')
const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres', //Tipo de DB
  logging: true //En consola muestra la información de cada consulta hecha
})

module.exports = sequelize
