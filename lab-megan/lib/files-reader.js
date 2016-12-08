'use strict';

const fs = require('fs');

// the code below is copied from the demo files, don't worry I typed it out
const fileReader = module.exports = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err) return callback(err);
    // console.log('can you see me?');
    return callback(null, data.toString());
  });
};
