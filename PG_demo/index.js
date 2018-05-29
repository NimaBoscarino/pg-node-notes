const { Client } = require('pg')
const client = new Client({
    database: 'hiphop'
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
getArtistByName('Kanye West', (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})

getArtistByName('Yasiin Bey', (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }

})

// getAllArtists((err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("The artists are...")
//         res.forEach(artist => console.log(artist.name))
//     }
// })

