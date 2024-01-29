const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.ATLAS_URI;
let database;

database = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connect = () => {
  console.log("connected to db");
  database.connect((err) => {
    console.log(err);
  });
};

const instance = () => database.db("pp");
const close = () => client.close();

module.exports = { connect, instance, close };