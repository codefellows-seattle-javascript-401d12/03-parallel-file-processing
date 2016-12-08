'use strict';

const fs = require('fs');

// Open file, truncate data to first 8 bytes, print result in hex form

fs.open('data/september.txt', 'r+', function(err, fileDesc) {
  if (err) throw err;
  console.log('File opened.');

  // truncate after 8 bytes
  fs.ftruncate(fileDesc, 8, function(err) {
    if (err) throw err;
  });

  fs.readFile('data/september.txt', function(err, data) {
    if (err) throw err;
    console.log('Truncated poem output', data.toString('hex'));
  });
});
