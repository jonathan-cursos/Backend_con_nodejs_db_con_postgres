// const getConnection = require('../lib/postgres')
// const pool = require('../lib/postgres.pool')
const sequelize = require('../lib/sequelize')

class UserService {
  constructor() {
    //El pool ya no es necesario
  }

  async find() {
    const query = 'SELECT * FROM alerts'
    const [data] = await sequelize.query(query) //los datos están en la 1er posición, en la 2da están los metadatos, informacion de la consulta
    //Actualmente recibe uno customizado, pero puede recibir unos de POO
    return { data }
  }
}

module.exports = UserService
