'use strict';

const fs = require('fs');

module.exports = exports = {};

// allfile run one by one
var i = 0;
var arr = ['./data/one.txt', './data/two.txt', './data/three.txt'];
exports.allFile = function(){
 if(i < arr.length) {
  readWrite(arr[i]);
  i++;
  exports.allFile();
 };
};

//read and write data
var readWrite = function(filePath){
  fs.readFile(filePath, function(err, data){
    if(err) throw err;
    console.log(filePath.split('/')[2],data.toString('hex', 0, 8));
    return data.toString('hex', 0, 8);
 });
};

// call back
