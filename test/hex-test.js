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
});
