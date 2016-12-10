'use strict';

const fs = require('fs');

// var theResults = ['one', 'two', 'three'];
// var theResults = [];

// the code below is copied from the demo files, don't worry I typed it out
// const fileReader = module.exports = function(fileName, callback) {
const fileReader = module.exports = function(callback) {
  var theResults = [];
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if (err) return callback(err);
    theResults.push(data.toString('hex',0,8));
    console.log('ONCE');
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
      if (err) return callback(err);
      theResults.push(data.toString('hex',0,8));
      console.log('TWICE');
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        if (err) return callback(err);
        theResults.push(data.toString('hex',0,8));
        console.log('THREE TIMES');
        console.log('the results are: ', theResults);
        callback(null, theResults);
      });
    });
  });
  // console.log('#1 is ', theResults[0], ' #2 is ', theResults[1], ' #3 is ', theResults[2]);
};

// console.log(theResults); // TODO: remove this line, is here to trick linter while I'm otherwise debuggins

// did not reach point of doing the below because of time
// kaylyn notes:
// use array
// nested madness goes here
// will be invoking this function in index.js
