//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo database.');
  }
  console.log('Connected to TodoApp mongo databse');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({name: 'Derek'}, {
    $set: {
      name: 'Luke'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aff6725dac3f59d6628f344'),
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  client.close();
});
