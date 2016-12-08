'use strict';

const fs = require('fs');

//TODO:do i need this file??
//TODO:from lib or data folders??

fs.readFile(`${__dirname}/data/one.txt`, function(err, data){
  if(err) throw err;
  console.log('First Content:', data.toString('hex', 0, 8));
});

fs.readFile(`${__dirname}/data/two.txt`, function(err, data){
  if (err) throw err;
  console.log('Second Content:', data.toString('hex', 0, 8));
});

fs.readFile(`${__dirname}/data/three.txt`, function(err, data){
  if (err) throw err;
  console.log('Third Content:', data.toString('hex', 0, 8));
});
