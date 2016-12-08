'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/read-files.js');

describe('File reader', function() {
  it('should error out with incorrect paths', function(done) {
    expect(fileReader).to.throw(Error);
    fileReader(`${__dirname}/../data/one.txt`, function(err) {
      expect(err).to.be.an('error');
    });
    done();
  });
});
