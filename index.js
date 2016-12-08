'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/data/one.txt`, 'hex', function(err, data) {
  if (err) throw err;
  console.log('content:', data.toString());
});

fs.readFile(`${__dirname}/data/two.txt`, 'hex', function(err, data) {
  if (err) throw err;
  console.log('content:', data.toString());
});

fs.readFile(`${__dirname}/data/three.txt`, 'hex', function(err, data) {
  if (err) throw err;
  console.log('content:', data.toString());
});
