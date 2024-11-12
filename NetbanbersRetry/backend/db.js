const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://<aphiwe>:<6sQDxKIel6bOYNfi>@cluster0.nd6el.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with actual MongoDB URI
const client = new MongoClient(uri);
 
async function connectDB() {
  await client.connect();
  console.log("Connected to MongoDB");
  return client.db("APDSConnect");
}
 
const db = connectDB();
module.exports = db;