'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if (err) throw err;
  console.log('one.txt string:', data.toString());
});

fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
  if (err) throw err;
  console.log('two.txt string:', data.toString());
});

fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
  if (err) throw err;
  console.log('three.txt string:', data.toString());
});
