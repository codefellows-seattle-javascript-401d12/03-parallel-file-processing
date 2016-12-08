'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');
const index = require('../index.js');
const files = require('../index.js').files;
let i = 0;

describe('Read File', function() {
  describe('proper file path', function() {
    afterEach('add one to files iterator', function() {
      return i++;
    });
    it(`should return the first 8 bytes of file ${files[0]}`, function(done) {
      index.printFiles(`${__dirname}/../data/${files[i]}`, function(err, data) {
        console.log('file:', files[i]);
        console.log('data = ', data);
        console.log('data', data.toString());
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(files[i]).to.equal(files[0]);
        done();
      });
    });
    it(`should return the first 8 bytes of file ${files[1]}`, function(done) {
      index.printFiles(`${__dirname}/../data/${files[i]}`, function(err, data) {
        console.log('file:', files[i]);
        console.log('data', data.toString());
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(files[i]).to.equal(files[1]);
        done();
      });
    });
    it(`should return the first 8 bytes of file ${files[2]}`, function(done) {
      index.printFiles(`${__dirname}/../data/${files[i]}`, function(err, data) {
        console.log('file:', files[i]);
        console.log('data', data.toString());
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        expect(files[i]).to.equal(files[2]);
        done();
      });
    });
  });
});
