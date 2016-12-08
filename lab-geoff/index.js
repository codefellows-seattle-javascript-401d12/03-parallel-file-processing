'use strict';

const fileReader = require('./lib/file-reader.js');

const path = `${__dirname}/data`;

function work(q) {
  if(q.length === 0) return; //We are all done.
  var file = q.shift();
  fileReader.firstEightAsHex(`${path}/${file}`, function(err, data) {
    if(err) throw err;
    console.log(data);
    work(q);
  });
}

// Q: Is it better practice to move this call above the function declaration?
work(['one.txt', 'two.txt', 'three.txt']);
