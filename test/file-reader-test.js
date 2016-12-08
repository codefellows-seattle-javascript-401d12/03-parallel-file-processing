'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Mod', function () {
  describe('improper file path', function () {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-correct-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('proper file path', function () {
    it('should return 8 bytes of data from each file', function(done) {
      fileReader(`${__dirname}/../data/one.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('7468697320697320');
        fileReader(`${__dirname}/../data/two.txt`, function(err, data) {
          expect(err).to.equal(null);
          expect(data).to.be.a('string');
          expect(data).to.equal('636f64652066656c');
          fileReader(`${__dirname}/../data/three.txt`, function(err, data) {
            expect(err).to.equal(null);
            expect(data).to.be.a('string');
            expect(data).to.equal('6973207468697320');
            done();
          });
        });
      });
    });
  });
});
