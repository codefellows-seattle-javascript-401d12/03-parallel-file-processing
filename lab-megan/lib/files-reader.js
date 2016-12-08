'use strict';

const fs = require('fs');

// the code below is copied from the demo files, don't worry I typed it out
const fileReader = module.exports = function(fileName, callback) {
  // var theFiles = [];
  fs.readFile(`${__dirname}/../data/${fileName}`, function(err, data) {
    if (err) return callback(err);
    // console.log('can you see me?');
    return callback(null, data.toString('hex', 0, 8));
    // get rid of return above, will exit function
  });
};

// kaylyn notes:
// use array
// nested madness goes here

// will be invoking this file in index.js
