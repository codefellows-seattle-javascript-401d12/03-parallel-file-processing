'use strict';

const fs = require('fs');

const fileReader = module.exports = function(fileArray, callback){
  var result = [];
  fs.readFile(fileArray[0], function(err, data){
    if (err) return callback(err);
    result.push(data.toString('hex', 0, 8));
    fs.readFile(fileArray[1], function(err,data){
      if(err) return callback(err);
      result.push(data.toString('hex', 0, 8));
      fs.readFile(fileArray[2], function(err,data){
        if(err) return callback(err);
        result.push(data.toString('hex', 0, 8));
        callback(null,result);

      });
    });
  });
};
