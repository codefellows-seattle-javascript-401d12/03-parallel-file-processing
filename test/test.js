'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');
let files = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];

describe('Read File', function() {
  describe('proper file path', function() {
    it('should return the contents of the file', function(done) {
      fileReader(files[0], function(err, data) {
        console.log('data', data.toString('utf-8'));
        expect(err).to.equal(null);
        done();
      });
    });
  });
});
