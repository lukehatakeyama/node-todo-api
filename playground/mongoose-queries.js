const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b05c270a93acb040d507363';
var id = '5b04a39bf55c1ef6f3106966';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Could not find ID');
  }
  console.log('User: ', user);
}).catch((e) => {
  console.log(e);
});


// if (!ObjectID.isValid(id)) {
//   console.log('Invalid ID');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID:', todo);
// }).catch((e) => {
//   console.log(e);
// });
