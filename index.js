'use strict';

const fileReader = require('./lib/file-reader.js');

module.exports = exports = {};

exports.files = ['one.txt', 'two.txt', 'three.txt'];

exports.printFiles = function(file, callback) {
  fileReader.readFile(file, function(err, data) {
    if(err) return callback(err);
    console.log(`${file}: ${data}`);
  });
};

for (var i = 0; i < exports.files.length; i++) {
  exports.printFiles(`${__dirname}/data/${exports.files[i]}`);
}
