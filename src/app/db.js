const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost', // or your database host
  user: 'root', // or your database username
  password: '', // or your database password
  database: 'crowntravel' // replace with your database name
});

module.exports = connection.promise();
