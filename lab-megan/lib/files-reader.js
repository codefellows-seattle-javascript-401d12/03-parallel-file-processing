'use strict';

const fs = require('fs');

const fileReader = module.exports = function(callback) {
  var theResults = [];
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if (err) return callback(err);
    theResults.push(data.toString('hex',0,8));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
      if (err) return callback(err);
      theResults.push(data.toString('hex',0,8));
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        if (err) return callback(err);
        theResults.push(data.toString('hex',0,8));
        // console.log('\n::: the final results are: ', theResults);
        callback(null, theResults);
      });
    });
  });
};
