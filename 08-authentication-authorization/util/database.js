const e = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://eliif:elif111121@cluster0.q9cqw4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )

    .then((client) => {
      console.log("Connected to the database");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log("Failed to connect to the database", err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw new Error("No database found");
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
