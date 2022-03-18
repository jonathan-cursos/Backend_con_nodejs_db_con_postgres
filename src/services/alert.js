const getConnection = require('../lib/postgres')

class UserService {
  constructor() {}

  async find() {
    const client = await getConnection() //Creamos la conexión
    const res = await client.query('SELECT * FROM task') //Hacemos la consulta
    return res.rows //Retornamos un array con cada fila de la tabla task
  }
}

module.exports = UserService
