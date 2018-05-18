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

  db.collection('Users').find({
    name: 'Luke'
  }).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Could not find users. ', err);
  });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Count of todos: ${count}`);
  // }, (err) => {
  //   if (err) {
  //     console.log('Could not fetch all docs. ', err);
  //   }
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5aff5576dac3f59d6628f1a7'),
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   if (err) {
  //     console.log('Could not fetch all docs. ', err);
  //   }
  // })


  client.close();
});
