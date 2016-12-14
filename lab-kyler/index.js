'use strict';

const dataDir = `${__dirname}/data`;

var pathArray = [`${dataDir}/one.txt`, `${dataDir}/two.txt`,`${dataDir}/three.txt`];
var oneTwoThree = require('./lib/onetwothree.js');

oneTwoThree.readThreeFiles(pathArray, console.log);
