'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

// I used the bash command: xxd -p filename | head -c 16
// to determine the expected results from a known
// utility.
const xxd = [
  '6f6e652e74787420',
  '74776f2e74787420',
  '74687265652e7478'
];

describe('File Reader: lib/file-reader.js', function() {
  describe('#readContentsAsString', function() {
    it('should return some content', function(done) {
      // The following 2 paths failed to load the intended file.
      // var path = `${__dirname}/data/one.txt`;
      // var path = '../data/one.txt';
      // ${__dirname} was resolving to the test dir.
      // ../data was also not finding it, because it appears
      // that the path is relative to the base directory of
      // the project.

      var path = 'data/one.txt';
      fileReader.readContentsAsString(path, function(err, data) {
        expect(err).to.not.be.an('error');
        expect(data).to.be.ok;
        done();
      });
    });
    it('should throw an error if no file', function(done) {
      fileReader.readContentsAsString('not/a/real/path/data.txt', function(err, data) {
        expect(err).to.be.an('error');
        expect(data).to.not.be.ok;
        done();
      });
    });
  });

  describe('#firstEightAsHex', function() {
    it('should convert data/one.txt -> 6f6e652e74787420', function(done) {
      var path = 'data/one.txt';
      fileReader.firstEightAsHex(path, function(err, data) {
        expect(err).to.not.be.an('error');
        expect(data).to.equal(xxd[0]);
        done();
      });
    });
    it('should throw an error if no file', function(done) {
      fileReader.firstEightAsHex('not/a/real/path/data.txt', function(err, data) {
        expect(err).to.be.an('error');
        expect(data).to.not.be.ok;
        done();
      });
    });
    it('should handle files with less than 8 bytes', function(done) {
      var path = 'data/short.txt';
      fileReader.firstEightAsHex(path, function(err, data) {
        expect(err).to.not.be.an('error');
        expect(data).to.have.length(6); //3 bytes * 2 chars/byte
        done();
      });
    });
  });

});
