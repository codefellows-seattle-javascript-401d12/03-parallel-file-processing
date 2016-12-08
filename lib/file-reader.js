'use strict';

const fs = require('fs');
const index = require('../index.js');

module.exports = exports = {};

exports.readFile = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if(err) return callback(err);
    return callback(null, data.toString('hex', 0, 8));
  });
};
