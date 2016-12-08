'use strict';

const ecpect = require('chai');
const readFile = require('./lib/readWrite.js');

* You will need to include tests that guarantee that the files are logged in the proper order.

describe('readFile', function(){
 it('should log files in the proper order', function(){
  expect(readWrite).to.eventually.to.equal(true).and.notify();
 });
});




* You will also need to include tests that check for improper file paths.
