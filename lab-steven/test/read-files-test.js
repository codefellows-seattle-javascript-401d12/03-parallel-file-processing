'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/read-files.js');

describe('File reader', function() {
  it('should error out with incorrect paths', function() {
    expect(fileReader).to.throw(Error);
    fileReader(`${__dirname}/../data/one.txt`, function(err) {
      expect(err).to.be.an('error');
    });
  });

  it('should return an array of the first 8 hex values of the buffers from one.txt, two.txt, and three.txt, in that order', function() {
    fileReader([`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`], function(err, data) {
      expect(data[0]).to.equal('46696c65206f6e65');
      expect(data[1]).to.equal('46696c652074776f');
      expect(data[2]).to.equal('46696c6520746872');
    });
  });
});
