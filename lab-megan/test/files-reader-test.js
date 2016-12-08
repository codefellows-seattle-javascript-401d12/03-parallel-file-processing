'use strict';

// the code below was copied from the demo code from class, don't worry I typed it all out

const expect = require('chai').expect;
const fileReader = require('../lib/files-reader.js');

describe('File Reader Module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', function() {
    it('should return the contents of the file', function(done) {
      fileReader(`${__dirname}/../data/data.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('sample data to be read from the read file demo\n');
        done();
      });
    });
  });
});
