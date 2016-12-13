'use strict';

const fs = require('fs');

module.exports = {};

module.exports.readThreeFiles = function(pathArray, cb) {
  var result = [];
  fs.readFile(pathArray[0], (err, data) => {
    if(err) cb(err);
    result.push(data.toString('hex', 0, 8));
    fs.readFile(pathArray[1], (err, data) => {
      if (err) cb(err);
      result.push(data.toString('hex', 0, 8));
      fs.readFile(pathArray[2], (err, data) => {
        if (err) cb(err);
        result.push(data.toString('hex', 0, 8));
        cb(null, result);
      });
    });
  });
};
