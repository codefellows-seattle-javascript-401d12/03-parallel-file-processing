'use strict';

const reader = require('./lib/files-reader.js');

reader(function(err, data) {
  if (err) return err;
  console.log('The result of reading your three files is:', data);
});
