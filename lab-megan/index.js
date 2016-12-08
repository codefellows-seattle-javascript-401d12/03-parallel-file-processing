'use strict';

const reader = require('./lib/files-reader.js');

reader('one.txt', function(err, data) {
  if (err) throw err;
  console.log('#1 is: ', data);
});

reader('two.txt', function(err, data) {
  if (err) throw err;
  console.log('#2 is: ', data);
});

reader('three.txt', function(err, data) {
  if (err) throw err;
  console.log('#3 is: ', data);
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
