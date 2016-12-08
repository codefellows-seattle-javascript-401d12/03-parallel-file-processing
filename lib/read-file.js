'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFirst = function(data) {
  fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
    if (err) throw err;
    console.log(data.toString('hex', 0, 8));
  });
};
