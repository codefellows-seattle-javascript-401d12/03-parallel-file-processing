'use strict';

// the code below was copied from the demo code from class, don't worry I typed it all out

const expect = require('chai').expect;
const fileReader = require('../lib/files-reader.js');

// below is code to be deleted for final submission
// describe('File Reader Module', function() {
//   describe('with an improper file path', function() {
//     it('should return an error', function(done) {
//       fileReader(`${__dirname}/not-a-file.txt`, function(err) {
//         expect(err).to.be.an('error');
//         done();
//       });
//     });
//   });

  // my own testing block
  describe('test reading three files from data folder', function() {
    describe('test reading file one', function () {
      it('should return the first 8 bytes in hex', function(done) {
        fileReader(`${__dirname}/../data/one.txt`, function(err, data) {
          expect(err).to.equal(null);
          expect(data).to.be.a('string');
          expect(data).to.contain('1');
          done();
        });
      });
    });

    describe('test reading file two', function() {
      it('should return the first 8 bytes in hex', function(done) {
        fileReader(`${__dirname}/../data/two.txt`, function(err, data) {
          expect(err).to.be.equal(null);
          expect(data).to.be.a('string');
          expect(data).to.contain('2');
          done();
        });
      });
    });

    describe('test reading file two', function() {
      it('should return the first 8 byes in hex', function(done) {
        fileReader(`${__dirname}/../data/three.txt`, function(err,data) {
          expect(err).to.be.equal(null);
          expect(data).to.be.a('string');
          expect(data).to.contain('3');
          done();
        });
      });
    });

  });

// below is code to be deleted for final submission
  // describe('testing reading file one', function() {
  //   it('should return the contents of the file', function(done) {
  //     fileReader(`${__dirname}/../data/one.txt`, function(err, data) {
  //       expect(err).to.equal(null);
  //       expect(data).to.be.a('string');
  //       expect(data).to.contain('1');
        // expect(data).to.equal('sample data to be read from the read file demo\n');
  //       done();
  //     });
  //   });
  // });

  // the below was copied from example code
  // describe('with a proper file path', function() {
  //   it('should return the contents of the file', function(done) {
  //     fileReader(`${__dirname}/../data/data.txt`, function(err, data) {
  //       expect(err).to.equal(null);
  //       expect(data).to.be.a('string');
        // expect(data).to.equal('sample data to be read from the read file demo\n');
  //       done();
  //     });
  //   });
  // });
});
