'use strict';

const fs = require('fs');

module.exports = exports = {};

  // Open file, truncate data to first 8 bytes, print result in hex form

exports.truncatePoem = function(poem) {
  fs.open(poem, 'r+', function(err, fileDesc) {
    if (err) throw err;
    console.log('File opened.');

    // truncate after 8 bytes
    fs.ftruncate(fileDesc, 8, function(err) {
      if (err) throw err;
    });

    fs.readFile(poem, function(err, data) {
      if (err) throw err;
      console.log('Truncated poem output', data.toString('hex'));
    });
  });
};
