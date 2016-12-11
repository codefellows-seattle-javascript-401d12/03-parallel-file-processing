'use strict';

const fs = require('fs');

module.exports = function(paths, cb) {
  var result = [];
  fs.readFile(paths[0], function(err, data) {
    if (err) return cb(err);
    result.push(data.toString('hex', 0, 8));

    fs.readFile(paths[1], function(err, data) {
      if (err) return cb(err);
      result.push(data.toString('hex', 0, 8));

      fs.readFile(paths[2], function(err, data) {
        if (err) return cb(err);
        result.push(data.toString('hex', 0, 8));
        console.log('Here is the hex', result);
        cb(null, result);
      });
    });
  });
};
