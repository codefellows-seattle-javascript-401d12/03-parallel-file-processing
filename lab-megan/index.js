'use strict';

const reader = require('./lib/files-reader.js');

//reader();

//TODO: change three calls to one

reader(theResults, function(err, data) {
  if (err) return err;
  console.log('ARGH');
  // console.log(data);
});

// reader('one.txt', function(err, data) {
//   if (err) throw err;
//   console.log('#1 is: ', data);
// });
//
// reader('two.txt', function(err, data) {
//   if (err) throw err;
//   console.log('#2 is: ', data);
// });
//
// reader('three.txt', function(err, data) {
//   if (err) throw err;
//   console.log('#3 is: ', data);
// });


// note to self: would like to array and loop through one fuction calling each file
// gio gave go ahead to leave three calls for now
