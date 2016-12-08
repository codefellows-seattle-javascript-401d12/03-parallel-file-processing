'use strict';

// awesome code goes here
const fs = require('fs');

fs.readFile('data/september.txt', function(err, data) {
  if (err) throw err;
  console.log('Poem output:', data.toString());
});

fs.stat('data/september.txt', function(err, stats) {
  if (err) throw err;
  console.log(stats);
  console.log('File info successfully fetched');
});

fs.open('data/september.txt', 'r+', function(err, fileDesc) {
  if (err) throw err;
  console.log('File opened.');

  // truncate after 8 bytes
  fs.ftruncate(fileDesc, 8, function(err) {
    if (err) throw err;
  });
});
