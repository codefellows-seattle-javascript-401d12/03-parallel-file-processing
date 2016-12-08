'use strict';

const fs = require('fs');

const fileReader = module.exports = function(fileArray) {
  var orderArray = [];
  fileArray.forEach(function(file) {
    const firstEightHexBytes = fs.readFileSync(file).toString('hex', 0, 8);
    console.log(firstEightHexBytes);
    orderArray.push(firstEightHexBytes);
  });
  return orderArray;
};

const fileArray = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];

fileReader(fileArray);
