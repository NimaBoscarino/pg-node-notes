## SQL from our Apps

As always, you're going to need to dive into the documentation! Here are some good places to start:

1. [node-postgres](https://node-postgres.com/)
2. [Error-first Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
3. [Bobby Tables](http://bobby-tables.com/)

Today's main goals were:

1. Reading and writing with SQL can be done in our apps
2. Understanding that queries have ASYNC execution, and dealing with this
3. Understanding sanitizing user input (Bobby Tables!)

Last week we talked about MongoDB, both in the shell and in Node. Yesterday (W4D1) we talked about Postgres in the shell. Today we looked a Postgres in Node! There's a handy Postgres driver called `pg` that lets us connect to a database (local or remote), and write SQL queries to interact with our tables.

The `pg` module is an npm package that can installed with `npm i pg --save`. 

```js
const { Client } = require('pg')
const client = new Client({
    database: 'hiphop'
})

client.query('SELECT * from artists', (err, res) => {
    console.log(err ? err.stack : res.rows)
})
```

Check the `PG_demo` folder for some examples.

One of the things that we really focused on during the lecture was separating our "data helper" functions into their own module. Take a look at the `kanye` project for this. To create the project, first make a Postgres database called 'hiphop' (`CREATE DATABASE hiphop;`), and then run the `kanye_schema.sql` and `kanye.sql` to set up and populate the tables. Also note, this repo has a *bunch* of branches. You can explore the different branches to see the stages I took to build it up from a "hard-coded" version. The order is:

1. kanye-init
2. kanye-helpers
3. kanye-async-safe
4. kanye-data-modules
5. kanye-pg
6. kanye-update

We saw that the queries run **asynchronously**, which meant that we had to be clever about how to design the helper functions. To this end, we talked about designing functions that work in the *error-first* callback pattern.

```js
function getArtistByName(name, cb) {
    client.query('SELECT * from artists WHERE name = $1::text LIMIT 1', [name], (err, res) => {
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
```

Also worth noting is that `pg` lets us parameterize the queries with this funky "$" notation. In a query, I can parameterize any variable with the $ symbol and a number. Then, the second parametery to the query is an array with a bunch of values. The number for each $ symbol refers to the **index** of that array. **NOTE: The array is 1-indexed**. So this:

```js
client.query('SELECT * from artists WHERE name = $1 LIMIT $2', ['Billy', '1'], (err, res) => {
    cb(err, res.rows)
})
```

Turns into this:

```js
client.query("SELECT * from artists WHERE name = 'Billy' LIMIT 1", (err, res) => {
    cb(err, res.rows)
})
```

Why would we want to do this? `pg` automatically sanitizes the inputs when we parameterize the query like this, so we can be sure that nothing funky is running on our database. I suggest taking a look at this classic comic: [Bobby Tables](http://bobby-tables.com/).

~ Nima Boscarino 🤖