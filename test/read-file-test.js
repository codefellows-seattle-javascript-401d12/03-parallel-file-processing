'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/read-file.js');

describe('Read File', function() {
  describe('returns correct contents in order', function() {
    it('should return the contents of the file in the defined order', function(done) {
      var readFileArray = ['412063616e6e6572', '412063616e6e6572', '4275742061206361'];
      readFile(function(data) {
        expect(data[0]).to.equal(readFileArray[0]);
        expect(data[1]).to.equal(readFileArray[1]);
        expect(data[2]).to.equal(readFileArray[2]);
        console.log('Output of data:', data);
        done();
      });
    });
  });

  describe('has the wrong file path', function() {
    it('should return an error', function() {
      readFile(`${__dirname}/nonexistent-text-file.txt`, function(err) {
        expect(err).to.be.an('error');
      });
    });
  });
});
