'use strict';

const fs = require('fs');

fs.readdir('./data', function(err, files) {
  if (err) throw err;
  console.log(files);
  // var count = files.length,
  // var results = {};
  // files.forEach(function (filename) {

    fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
      if (err) throw err;
      console.log('content:', data.toString('hex', 0, 8));
    });

    fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
      if (err) throw err;
      console.log('content:', data.toString('hex', 0, 8));
    });

    fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
      if (err) throw err;
      console.log('content:', data.toString('hex', 0, 8));
    });
  // });
});
