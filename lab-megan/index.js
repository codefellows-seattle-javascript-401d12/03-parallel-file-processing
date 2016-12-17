'use strict';

const reader = require('./lib/files-reader.js');

reader(function(err, data) {
  if (err) return err;
  console.log('::: In index file, your files are: ', data);
});

// below is NOPE
// reader(function(data) {
//   // if (err) return err;
//   console.log('::: In index file, your files are: ', data);
// });
