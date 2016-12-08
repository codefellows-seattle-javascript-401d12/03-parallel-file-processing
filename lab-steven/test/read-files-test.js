'use strict';

const fs = require('fs');
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
      const resultOne = fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
        return data.toString('hex', 0, 8);
      });
      const resultTwo = fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
        return data.toString('hex', 0, 8);
      });
      const resultThree = fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        return data.toString('hex', 0, 8);
      });
      expect(data[0]).to.equal(resultOne);
      expect(data[1]).to.equal(resultTwo);
      expect(data[2]).to.equal(resultThree);
    });
  });
});
