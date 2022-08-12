
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nateharrell:Milli0nair3@natepersonal.1wpy6ww.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("connected to db");
  client.close();
});
