'use strict';

const reader = require('./lib/read-files.js');

const fileArray = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];

reader(fileArray);
