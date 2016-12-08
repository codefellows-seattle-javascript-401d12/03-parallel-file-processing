'use strict';

const truncate = require('./lib/truncate.js');

var poemData = 'data/one.txt'

var poemFiles = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];

truncate.truncatePoem(poemFiles[1]);
