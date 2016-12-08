'use strict';

const mocha = require('gulp-mocha');
const expect = require('chai').expect;
const readFile = require('../lib/readFile.js');

describe('readFile', function() {
  it('should return a concatenated string', function() {
    let result = readFile.readFile(readFile.myCallback);
    expect(result).to.be.equal('436f666665652069 4469642049206d65 706c656173652074');
  });
});
