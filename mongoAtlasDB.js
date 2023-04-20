const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://surajbade39:admin@cluster0.ixfsgzn.mongodb.net/?retryWrites=true&w=majority';
// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Get a reference to the database
    const database = client.db('tables');

    // Get a reference to the collection
    const collection = database.collection('table');

    // Insert a document into the collection
    const result = await collection.insertOne({ name: 'Alice', age: 30 });
    console.log(`Inserted ${result.insertedCount} documents`);

    // Find all documents in the collection
    const documents = await collection.find().toArray();
    console.log(`Found ${documents.length} documents`);
    console.log(documents);
  } finally {
    // Close the client
    await client.close();
  }
}

run().catch(console.error);
