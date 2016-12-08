'use strict';

const fileReader = require('./lib/file-reader.js');

fileReader(`${__dirname}/data/one.txt`, function(err, data) {
  if (err) throw err;
  console.log('content of the first file is:', data.toString('hex', 0, 8));
  fileReader(`${__dirname}/data/two.txt`, function(err, data) {
    if (err) throw err;
    console.log('content of the second file is:', data.toString('hex', 0, 8));
    fileReader(`${__dirname}/data/three.txt`, function(err, data) {
      if (err) throw err;
      console.log('content of the third file is:', data.toString('hex', 0, 8));
    });
  });
});
