'use strict';

const fs = require('fs');

module.exports = exports = {};

// readContents is essentially just a proxy to fs.readFile.
// TODO: Consider removing readContents because it doesn't
//       add any functionality to fs.readFile.
exports.readContentsAsString = function(path, cb) {
  fs.readFile(path, function(err, data) {
    if(err) return cb(err);
    cb(null, data.toString());
  });
};

exports.firstEightAsHex = function(path, cb) {
  fs.readFile(path, function(err, data) {
    if(err) return cb(err);
    cb(null, data.slice(0, 8).toString('hex'));
  });
};
