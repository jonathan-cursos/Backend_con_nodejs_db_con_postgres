const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin123',
    database: 'control_monitoreo'
  })

  await client.connect()
  return client //Debe retornar el client para hacer consultas
}

module.exports = getConnection
