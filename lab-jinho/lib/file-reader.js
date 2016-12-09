'use strict';

const fs = require('fs');

const fileReader = module.exports = function(pathArray, callback){
  var result = [];
  fs.readFile(pathArray[0], function(err, data){
    if (err) return callback(err);
    result.push(data.toString('hex', 0, 8));
    fs.readFile(pathArray[1], function(err, data) {
      if (err) return callback(err);
      result.push(data.toString('hex', 0, 8));
      fs.readFile(pathArray[2], function(err, data) {
        if (err) return callback(err);
        result.push(data.toString('hex', 0, 8));
        console.log('result:', result);
        callback(null, result);
      });
    });
  });
};
