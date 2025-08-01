const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://eliif:elif111121@cluster0.q9cqw4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )

    .then((client) => {
      console.log("Connected to the database");
      callback(client);
    })
    .catch((err) => {
      console.error("Failed to connect to the database", err);
    });
};

module.exports = mongoConnect;
