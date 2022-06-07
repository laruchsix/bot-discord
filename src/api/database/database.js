const mysql = require("mysql");

const {DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME} = process.env;

const db = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
  });

db.connect(function(err) {
    if (err) throw err;

    console.log("Connecté à la base de données MySQL!");
});


module.exports = db;