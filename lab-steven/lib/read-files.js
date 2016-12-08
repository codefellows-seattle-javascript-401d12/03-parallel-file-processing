'use strict';

const fs = require('fs');

const fileReader = module.exports = function() {
  fs.readFile(`${__dirname}/data/one.txt`, 'hex', function(err, data) {
    if (err) throw err;
    console.log(data);
    fs.readFile(`${__dirname}/data/two.txt`, 'hex', function(err, data) {
      if (err) throw err;
      console.log(data);
      fs.readFile(`${__dirname}/data/three.txt`, 'hex', function(err, data) {
        if (err) throw err;
        console.log(data);
      });
    });
  });
};
