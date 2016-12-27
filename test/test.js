'use strict';

const expect = require('chai').expect;
// const mocha = require('mocha');
const readFile = require('../lib/readWrite.js');
var arr = ['./data/one.txt', './data/two.txt', './data/three.txt'];
//  You will need to include tests that guarantee that the files are logged in the proper order.

describe('readFile ', function(){
  it('should logged in the proper order.', function(){
    expect(readFile.readWrite(arr[0])).to.equal('5468657265206973');
    expect(readFile.testAnswer[1]).to.equal('492062656c696576');
    expect(readFile.testAnswer[2]).to.equal('4966206120636f75');
  });
});



// You will also need to include tests that check for improper file paths.
