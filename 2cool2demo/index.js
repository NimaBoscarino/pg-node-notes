const { Client } = require('pg')
const client = new Client()

client.connect()

client.query("SELECT 'hello world'::text as message", (err, res) => {

  console.log(res.rows[0].message)

  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})