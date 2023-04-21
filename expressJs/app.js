require('dotenv').config();
const express = require('express');
const { connectToDatabase, client } = require('./db');
const firstCollection = require('./db');


const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// Route to retrieve all documents from the "first" collection
app.get('/all', async (req, res) => {
  try {
    await connectToDatabase();

    const documents = await firstCollection.find().toArray();
    res.send(documents);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving documents');
  }
});

// Route to retrieve a document with a given ID from the "first" collection
app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await connectToDatabase();
    const document = await firstCollection.findOne({ _id: userId });
    if (document) {
      res.send(document);
    } else {
      res.status(404).send(`Document with ID ${userId} not found`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving document');
  }
});

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
