'use strict';

const expect = require('chai').expect;
const reader = require('../lib/files-reader.js');

describe('test reading files from data folder', function() {

  describe('test for incorrect file path', function(done) {
    it('should return an error', function() {
      reader('/../data/doesnotexist.txt', function(err, data) {
        expect(err).to.exist;
        expect(data).to.not.exist;
        done();
      });
    });
  });

  describe('testing order of results', function(done) {
    it('should return the results in the correct order', function() {
      var testResults = ['313a205468697320', '323a205468697320', '333a205468697320'];
      reader (function(data) {
        expect(data[0]).to.equal(testResults[0]);
        expect(data[1]).to.equal(testResults[1]);
        expect(data[2]).to.equal(testResults[2]);
        // console.log('::: inside test, the data results are: ', data);
        done();
      });
    });
  });

});
