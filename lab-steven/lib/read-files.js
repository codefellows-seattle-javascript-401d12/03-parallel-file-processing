'use strict';

const fs = require('fs');

const fileReader = module.exports = function(fileArray, callback) {
  if (!fileArray) throw new Error('You didn\'t pass in any file paths.');
  var arrayOfHexes = [];
  fs.readFile(fileArray[0], function(err, data) {
    if (err) return callback(err);
    arrayOfHexes.push(data.toString('hex', 0, 8));
    fs.readFile(fileArray[1], function(err, data) {
      if (err) return callback(err);
      arrayOfHexes.push(data.toString('hex', 0, 8));
      fs.readFile(fileArray[2], function(err, data) {
        if (err) return callback(err);
        arrayOfHexes.push(data.toString('hex', 0, 8));
        return callback(null, arrayOfHexes);
      });
    });
  });
};
