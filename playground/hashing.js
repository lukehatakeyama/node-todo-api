const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


var data = {
  id: 10,
}


var token = jwt.sign(data, 'abc123');
console.log(token);

var decode = jwt.verify(token, 'abc123');
console.log(decode);

// var message = 'I am user number 3';
//
// var hash = SHA256(message).toString();
//
// console.log(`message:`, message);
// console.log(`hash: `, hash);
//
// var data = {
//   id: 4,
// }
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
// }
//
// token.data.id = 5;
// token.data.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'someSecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed')
// } else {
//   console.log('Data changed, do not trust!');
// }
