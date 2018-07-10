const { Client } = require('pg') // return an object, with the Client property in it
const client = new Client({
    database: 'people',
})
  
client.connect() // I have to connect to the DB
// var name = "Robert'); DROP TABLE Students; --"

var name = "Jimmy"
var address = "123 Street Avenue"

function insertIntoStudents(name, address) {
    client.query("INSERT INTO STUDENTS VALUES ($1, $2)", [name, address], (err, res) => {
        console.log(err ? err.stack : res.rows) // Hello World!
        client.end()
    })
}

insertIntoStudents('bob', '345 Avenue')
insertIntoStudents('tim', '345 Avenue')
insertIntoStudents('jane', '345 Avenue')
insertIntoStudents('jasjd', '345 Avenue')
