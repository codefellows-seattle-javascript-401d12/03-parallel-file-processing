'use strict'

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('testing File Reader Module', function() {
  describe('with bad file paths', function() {
    it('should return an error', function() {
      fileReader([`${__dirname}/no-file-exists.txt`], function(err) {
        expect(err).to.equal(true);
      });
    });
  });

  describe('with proper file paths', function() {
    before((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`
      ];
      done();
    });
    it('should have correct string order', (done) => {
      var expectedResult = ['4c65742069742073', '4d616b6520436872', '57696e6e65722057'];
      fileReader(this.paths, function(err, data) {
        expect(err).to.equal(null);
        expect(data[0]).to.equal(expectedResult[0]);
        expect(data[1]).to.equal(expectedResult[1]);
        expect(data[2]).to.equal(expectedResult[2]);
        done();
      });
    });
  });
});
