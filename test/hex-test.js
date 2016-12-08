'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/read-file.js');

describe('Read File', function() {
  describe('with an improper file path', function() {
    it('should return an error', function(done) {
      readFile(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('#readFile', function() {
    it('should display in proper order', function(done) {
      readFile(`${__dirname}/../data/one.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(data).to.equal('276f6e6520617765');
        readFile(`${__dirname}/../data/two.txt`, function(err, data) {
          expect(err).to.equal(null);
          expect(data).to.be.a('string');
          expect(data).to.equal('277365636f6e6420');
          readFile(`${__dirname}/../data/three.txt`, function(err, data) {
            expect(err).to.equal(null);
            expect(data).to.be.a('string');
            expect(data).to.equal('2774686972642073');
            done();
          });
        });
      });
    });
  });
});
