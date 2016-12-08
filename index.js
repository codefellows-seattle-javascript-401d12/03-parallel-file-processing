'use strict';

const fs = require('fs');
//fileReader?
const fileReader = require('./lib/file-reader.js')

//TODO:from lib or data folders??

fileReader(`${__dirname}/data/one.txt`, function(err, data){
  if(err) throw err;
  console.log('First Content:', data.toString('hex', 0, 8));
});

fileReader(`${__dirname}/data/two.txt`, function(err, data){
  if (err) throw err;
  console.log('Second Content:', data.toString('hex', 0, 8));
});

fileReader(`${__dirname}/data/three.txt`, function(err, data){
  if (err) throw err;
  console.log('Third Content:', data.toString('hex', 0, 8));
});
