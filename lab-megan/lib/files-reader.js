'use strict';

const fs = require('fs');

// the code below is copied from the demo files, don't worry I typed it out
const fileReader = module.exports = function(fileName, callback) {
  fs.readFile(`${__dirname}/../data/${fileName}`, function(err, data) {
    if (err) return callback(err);
    return callback(null, data.toString('hex', 0, 8));
  });
};

// did not reach point of doing the below because of time
// kaylyn notes:
// use array
// nested madness goes here
// will be invoking this function in index.js
