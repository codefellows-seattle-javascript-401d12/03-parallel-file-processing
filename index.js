'use strict';

const readFiles = require('./lib/read-file');

readFiles(function(data) {
  console.log('Output of data:', data);
});
