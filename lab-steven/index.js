'use strict';

const fileReader = require('./lib/read-files.js');

fileReader([`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`], function(err, data) {
  if (err) throw err;
  data.forEach(function(file) {
    console.log(file);
  });
});
