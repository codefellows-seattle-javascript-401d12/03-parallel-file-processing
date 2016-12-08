'use strict';

const fs = require('fs');


module.exports = function(callback) {
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if (err) throw err('did not read one.txt');
    console.log(data.toString('hex', 0, 8));
    let result = `${data.toString('hex', 0, 8)} `;
    return fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
      if (err) throw err('did not read two.txt');
      console.log(data.toString('hex', 0, 8));
      result+=`${data.toString('hex', 0, 8)} `;
      return fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
        if (err) throw err('did not read three.txt');
        console.log(data.toString('hex', 0, 8));
        result+=`${data.toString('hex', 0, 8)}`;
        console.log(result);
        callback(result);
      });
    });
  });
};
