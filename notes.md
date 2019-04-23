# W 4 D 2: SQL FROM OUR APPS

What the heck did you do yesterday?

SQL - Ess Que Ell

- Structured Query Language
- Databases
  - SQL Databases:
    - Postgres <-- Ours!
    - MySQL
    - MariaDB
    - SQLite
    - SQLServer (Microsoft)
  - NonSQL:
    - MongoDB
  - A book
  - A wall that you etch stuff onto
  - A trusted friend
    - Hey Joe! I need to buy milk.
- CRUD ACTIONS
- SQL
  - CREATE a table
  - INSERT
  - DELETE
  - JOIN
    - Authors
    - Books
    - HEY! Get me all of the books by one author.


Languages:

imperative
  - You do this, and then this
  - Heres a variable! Do a loop!
  - Giving instructions

```js
const arr = [1, 2, 3, 4, 5]
const evenArr = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i])
  }
}

// evenArr is just the evens

```
declarative
  - I don't care how you get it done. Just do it.

```js
const arr = [1, 2, 3, 4, 5]
const evenArr = arr.filter(elem => elem % 2 === 0)

// evenArr is just the evens
```

Today's main goals are:

1. Reading and writing with SQL can be done in our apps
2. Understanding that queries have ASYNC execution, and dealing with this (errors!)
3. Understanding sanitizing user input (Bobby Tables!)

T SHAPED DEV
============

Generally pretty broad understanding
Maybe one or two specific pillars of expertise


INSIDE OF PSQL

\i hiphop_schema.sql
\i hiphop_seeds.sql