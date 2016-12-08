'use strict';

const readFile = require('./lib/read-file');

readFile(function(data) {
  console.log('Output of data:', data);
});
