'use strict';

const fileReader = require('./lib/file-reader.js');

// Because files are loading async, we need to
// nest all the calls to enforce the order.
fileReader.firstEightAsHex(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err;
  console.log(data);
  fileReader.firstEightAsHex(`${__dirname}/data/two.txt`, function(err, data) {
    if(err) throw err;
    console.log(data);
    fileReader.firstEightAsHex(`${__dirname}/data/three.txt`, function(err, data) {
      if(err) throw err;
      console.log(data);
    });
  });
});

//NOTE: It's probably possible to rewrite the nested tree as
//      a recursive function that might be a bit nicer to look at.
