'use strict';

const fs = require('fs');
const readFile = require('./lib/read-file.js');

// fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
//   if (err) throw err;
//   console.log(data.toString('hex', 0, 8));
// });
//
// fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
//   if (err) throw err;
//   console.log(data.toString());
// });
//
// fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
//   if (err) throw err;
//   console.log(data.toString());
// });

readFile.readFirst();
