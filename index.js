'use strict';

const truncate = require('./lib/truncate.js');

var poemFiles = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];

poemFiles.forEach(
  function(filePath) {
    console.log(filePath);
    truncate.truncatePoem(filePath);
  }
);
