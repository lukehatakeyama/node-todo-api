//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const obj = ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo database.');
  }
  console.log('Connected to TodoApp mongo databse');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Error inserting object. ', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Luke',
    age: 22,
    location: 'San Diego'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert into Users. ', err)
    }

    console.log(result.ops[0]._id.getTimestamp());
  })

  client.close();
});
