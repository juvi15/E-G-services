"user strict";

const mysql = require("mysql");

//Mysql Database Connection
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "government",
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database connection established ");
});

module.exports = dbConn;
