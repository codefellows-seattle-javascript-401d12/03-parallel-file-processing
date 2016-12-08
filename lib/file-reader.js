'use strict';

const fs = require('fs');
// const fileReader = require('../lib/file-reader.js');

//TODO:single function or multiple??
const fileReader = module.exports = function(file, callback){
  // var threeFileDatas = [];
  // TODO:loop through each file's data and store them into this empty array?? return the array --- but it is expecting a string instead

  fs.readFile(file, function(err, data){
    if (err) callback(err);
    return callback(null, data.toString('hex', 0, 8));
  });
};
