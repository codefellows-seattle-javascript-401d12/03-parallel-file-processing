'use strict';

const fs = require('fs');

module.exports = function(callback){
  var readFileArray = [];
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
    if (err) throw new Error('text one is not being read');
    readFileArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
      if (err) throw new Error('text two is not being read');
      readFileArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
        if (err) throw new Error('text three is not being read');
        readFileArray.push(data.toString('hex', 0, 8));
        return callback(readFileArray);
      });
    });
  });
};
