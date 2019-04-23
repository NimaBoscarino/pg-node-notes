Today's main goals were:

1. Reading and writing with SQL can be done in our apps
2. Understanding that queries have ASYNC execution, and dealing with this
3. Understanding sanitizing user input (Bobby Tables!)

Documentation!

1. [node-postgres](https://node-postgres.com/)
2. [Error-first Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
3. [Bobby Tables](http://bobby-tables.com/)

Review of SQL

KV: SQL is declarative code (vs imperative code). HTML and CSS are examples of declarative code but they don't deal with data. This is the first time you've written code that works with data where you are not giving the computer granular instructions. Instead you write your desired results with some high level direction (group this, join that, etc) and let the RDBMS figure out HOW to manipulate the data.

T-Shaped developers. The idea that a full stack / generalist developer also tends to specialize a bit by inherantly having a strength or preference towards one aspect.

SQL was created with the goal that developers wouldn't be writing the code, business/data analysts would be writing the queries.

every single developer (web, desktop, mobile, etc) needs to have a reasonable amount of comfort with SQL.

Software is really just data+behavior. Data is therefore a BIG part of web apps.