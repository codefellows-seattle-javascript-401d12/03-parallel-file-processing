'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');
let files = ['one.txt', 'two.txt', 'three.txt'];
let i = 0;

describe('Read File', function() {
  describe('proper file path', function() {
    afterEach('add one to files iterator', function() {
      return i++;
    });
    it(`should return the first 8 bytes of file ${files[0]}`, function(done) {
      fileReader(`${__dirname}/../data/${files[i]}`, function(err, data) {
        console.log('file:', files[i]);
        console.log('data', data.toString());
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        done();
      });
    });
    it(`should return the first 8 bytes of file ${files[1]}`, function(done) {
      fileReader(`${__dirname}/../data/${files[i]}`, function(err, data) {
        console.log('file:', files[i]);
        console.log('data', data.toString());
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        done();
      });
    });
    it(`should return the first 8 bytes of file ${files[2]}`, function(done) {
      fileReader(`${__dirname}/../data/${files[i]}`, function(err, data) {
        console.log('file:', files[i]);
        console.log('data', data.toString());
        expect(err).to.equal(null);
        expect(data).to.be.a('string');
        done();
      });
    });
  });
});
