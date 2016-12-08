'use strict';

const fs = require('fs');

function readFileContent(callback) {
    fs.readFile(`${__dirname}/data/one.txt`, function (err, data) {
        if (err) throw err;
        var buffer = Buffer.alloc(8,data);
        callback(buffer);
      fs.readFile(`${__dirname}/data/two.txt`, function (err, data) {
          if (err) throw err;
          var buffer = Buffer.alloc(8,data);
          callback(buffer);
          fs.readFile(`${__dirname}/data/three.txt`, function (err, data) {
              if (err) throw err;
              var buffer = Buffer.alloc(8,data);
              callback(buffer);
        });
      });
    });
}

readFileContent(function (data) {
  console.log('file:', data.toString('hex'));
});
