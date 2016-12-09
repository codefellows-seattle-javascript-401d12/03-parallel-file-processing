'use strict';

const fs = require('fs');

var theResults = ['one', 'two', 'three'];

// the code below is copied from the demo files, don't worry I typed it out
const fileReader = module.exports = function(fileName, callback) {
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if (err) return callback(err);
    return callback(null, data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
      if (err) return callback(err);
      return callback(null, data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        if (err) return callback(err);
        return callback(null, data.toString('hex', 0, 8));
        callback(null, result);
      });
    });
  });
  console.log('#1 is ', theResults[0], ' #2 is ', theResults[1], ' #3 is ', theResults[2]);
};

// did not reach point of doing the below because of time
// kaylyn notes:
// use array
// nested madness goes here
// will be invoking this function in index.js
