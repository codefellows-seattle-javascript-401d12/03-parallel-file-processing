'use strict';

const fs = require('fs');

const fileReader = module.exports = function(fileArray) {
  fileArray.forEach(function(file) {
    console.log(fs.readFileSync(file).toString('hex', 0, 8));
  });
};
