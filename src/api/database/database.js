var mysql = require("mysql2");
const dotenv = require("dotenv").config();

const {DATABASE_MYSQL_HOST, DATABASE_MYSQL_USER, DATABASE_MYSQL_PASSWORD, DATABASE_MYSQL_NAME} = process.env;

const myslq_db = mysql.createConnection({
    host: DATABASE_MYSQL_HOST,
    user: DATABASE_MYSQL_USER,
    password: DATABASE_MYSQL_PASSWORD,
    database: DATABASE_MYSQL_NAME,
    multipleStatements: true,
    insecureAuth: true,
  });

myslq_db.connect(function(err) {
    if (err) throw err;

    console.log("Connecté à la base de données MySQL!");
});

/*const MongoClient = require('mongodb').MongoClient;
const url = process.env.DATABASE_MONGO_URI;
const dbName = process.env.DATABASE_MONGO_NAME;
 
const client = new MongoClient(url);

await client.connect();
console.log('Connected successfully to server');
const mongo_db = client.db(dbName);
const collection = db.collection('documents');


MongoClient.connect(url, function(err, client) {
  if (err)
    throw err;

  console.log("Connected successfully to server");
  mongo_db = client.db(dbName);
  console.log(mongo_db);
});*/

module.exports = myslq_db;