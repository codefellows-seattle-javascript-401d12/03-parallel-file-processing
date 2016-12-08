'use strict';

const reader = require('./lib/files-reader.js');

reader('one.txt', function(err, data) {
  if (err) throw err;
  console.log(data);
});



// code below brough in from day 2 lab

// const greet = require('./lib/greetings.js');
//
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
//
// greet.sayHello('Scott');
// greet.sayGoodbye();
