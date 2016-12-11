'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/readFile.js');

describe('readFile', function() {
  describe('attempting to read non-existent files', function() {
    it('should throw an error', function() {
      readFile([`${__dirname}/not-a-real-file.txt`], function(err) {
        expect(err).to.equal(true);
      });
    });
  });

  describe('attempting to read files with good paths', function() {
    before((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`
      ];
      done();
    });

    it('should have the correct number of strings for all three files', (done) =>  {
      var correctResults = [
        '436f666665652069',
        '4469642049206d65',
        '706c656173652074'
      ];
      readFile(this.paths, function(err, data) {
        expect(err).to.equal(null);
        expect(data[0]).to.equal(correctResults[0]);
        expect(data[1]).to.equal(correctResults[1]);
        expect(data[2]).to.equal(correctResults[2]);
        console.log('data', data);
        done();
      });
    });
  });
});
