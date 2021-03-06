const { Client } = require('pg')
const client = new Client({
    database: 'hippity_hop'
})

client.connect()

function getAllArtists(cb) {
    client.query('SELECT * from artists', (err, res) => {
        // console.log(err ? err.stack : res.rows)
        cb(err, res.rows)
    })
}

function getArtistByName(name, cb) {
    client.query('SELECT * from artists WHERE name = $1::text LIMIT 1', [name], (err, res) => {
        // console.log(err ? err.stack : res.rows)
        cb(err, res.rows)
    })
}

const kanye = "Kanye West"
const nas = "Nas"

getAllArtists((err, rows) => {
    console.log(rows)
})


getArtistByName(kanye, (err, rows) => {
    console.log(rows)
})

getArtistByName(nas, (err, rows) => {
    console.log(rows)
})