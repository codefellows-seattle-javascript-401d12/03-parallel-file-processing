'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/read-files.js');

describe('fileReader', function() {
  it('should have proper file paths', function() {
    expect(fileReader[`${__dirname}/../data/onee.txt`]).to.equal(undefined);
  });

  it('should return an array with the first 8 hex values of one.txt, two.txt, and three.txt, in that order', function() {
    var arrayOfHexes = fileReader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`]);
    expect(arrayOfHexes[0]).to.equal('46696c65206f6e65');
    expect(arrayOfHexes[1]).to.equal('46696c652074776f');
    expect(arrayOfHexes[2]).to.equal('46696c6520746872');
  });
});
