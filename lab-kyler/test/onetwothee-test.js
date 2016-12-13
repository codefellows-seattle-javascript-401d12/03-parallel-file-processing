'use strict';

const expect = require('chai').expect;
const oneTwoThree = require('../lib/onetwothree.js');

describe('module oneTwoThree', function() {
  describe('with bad file paths', function() {
    it('should return an error', function() {
      oneTwoThree.readThreeFiles(['folder/dont-exist.txt', 'otherbadpath', 'worstpathever'], function(err) {
        expect(err).to.equal(true);
      });
    });
  });
  describe('with good file paths', function() {
    before((done) => {
      this.paths = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];
      done();
    });
    it('have the correct order of hex string', () => {
      var expectedResult = [];
      oneTwoThree.readThreeFiles(this.paths, function(err,data) {
        expect (err).to.equal(null);
        expect(data[0]).to.equal(expectedResult[0]);
        expect(data[1]).to.equal(expectedResult[1]);
        expect(data[2]).to.equal(expectedResult[2]);
      });
    });
  });
});
