// Import / Require MYSQL package
const mysql = require("mysql");

// Connection for all password, user, database and port definitions
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mocha1Ginger21991!!",
  database: "burgers_db"
});

// Connect set up and alert users if connection is made
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export connection definition for ORM to access
module.exports = connection;
