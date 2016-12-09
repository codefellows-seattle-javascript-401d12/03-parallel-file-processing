'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/files-reader.js');

  // my own testing block
describe('test reading files from data folder', function() {

  describe('test for incorrect file path', function(done) {
    it('should return an error', function() {
      fileReader('/../data/doesnotexist.txt', function(err, data) {
        expect(err).to.exist;
        expect(data).to.not.exist;
        done();
      });
    });
  });

  describe('testing file 1', function () {
    it('should return the first 8 bytes in hex', function(done) {
      // keep line below for later reference
      // fileReader(`${__dirname}/../data/one.txt`, function(err, data) {
      fileReader('/../data/one.txt', function(err, data) {
        expect(err).to.be.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.have.length(16);
        done();
      });
    });
  });

  describe('testing file two', function() {
    it('should return the first 8 bytes in hex', function(done) {
      fileReader('/../data/two.txt', function(err, data) {
        expect(err).to.be.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.have.length(16);
        done();
      });
    });
  });

  describe('testing file two', function() {
    it('should return the first 8 bytes in hex', function(done) {
      fileReader('/../data/three.txt', function(err, data) {
        expect(err).to.be.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.have.length(16);
        done();
      });
    });
  });

});
