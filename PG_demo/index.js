const { Client } = require('pg')
const client = new Client({
    database: 'pg_test'
})

client.connect()

function getUsers(cb) {
    client.query('SELECT * FROM users', (err, res) => {
        // console.log(err, res)
        cb(err, res.rows)
    })
}

function getUserByName(name, cb) {
    client.query('SELECT * FROM users WHERE name=$1::text LIMIT 1', [name], (err, res) => {
        // console.log(err, res)
        cb(err, res.rows)
    })
}

function getNotUsersByName(name, cb) {
    client.query('SELECT * FROM users WHERE name!=$1::text', [name], (err, res) => {
        // console.log(err, res)
        cb(err, res.rows)
    })
}

getNotUsersByName('sally', (err, users) => {
    if (err) {
        console.log('ERR:', err)
    } else {
        console.log(users)
        client.end()
    }
})

// getUserByName('sally', (err, user) => {
//     if (err) {
//         console.log('ERR:', err)
//     } else {
//         console.log(user)
//         client.end()
//     }
// })

// getUsers((err, users) => {
//     if (err) {
//         console.log('ERR:', err)
//     } else {
//         console.log(users)
//         // client.end()
//     }
// })