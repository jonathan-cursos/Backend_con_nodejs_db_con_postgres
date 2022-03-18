// const getConnection = require('../lib/postgres')
const pool = require('../lib/postgres.pool')

class UserService {
  constructor() {
    ;(this.pool = pool), this.pool.on('error', (error) => console.log(error)) //
  }

  // async find() {
  //   const client = await getConnection() //Creamos la conexión
  //   const res = await client.query('SELECT * FROM task') //Hacemos la consulta
  //   return res.rows //Retornamos un array con cada fila de la tabla task
  // }

  async find() {
    //Ya aquí no abrimos la conexión, sino en el constructor, no una por cada consulta
    const query = 'SELECT * FROM alerts'
    const res = await this.pool.query(query) //Hacemos la consulta
    return res.rows //Retornamos un array con cada fila de la tabla task
  }
}

module.exports = UserService
