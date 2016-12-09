'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Module', function(){
  describe('with bad filepath', function(){
    it('should return error', function(){
        fileReader([`${__dirname}/dont-exist.txt`], function(){
          expect(err).to.equal(true);
        });
    });
  });
  describe('with good filepath', function(){
    before((done) => {
      this.paths = [`${__dirname}/../data/one.txt`,
                    `${__dirname}/../data/two.txt`,
                    `${__dirname}/../data/three.txt`];
      done();
    });

  it('should have correct order of strings', (done) => {
    var expectedResult = ['6669727374206669','7365636f6e642066','7468697264206669'];
    fileReader(this.paths, function(err,data){
      expect(err).to.equal(null);
      expect(data[0]).to.equal(expectedResult[0]);
      expect(data[1]).to.equal(expectedResult[1]);
      expect(data[2]).to.equal(expectedResult[2]);
      done();
      });
    });
  });
});
