'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('Reading all three files', function(){
  describe('read files asynchronously?', function(){
    // var threeFileData = [];
    before( function(done){
      fs.readFile(`${__dirname}/../data/one.txt`, function(err, data){
        threeFileData.push(data.toString());
        fs.readFile(`${__dirname}/../data/two.txt`, function(err, data){
          threeFileData.push(data.toString());
          fs.readFile(`${__dirname}/../data/three.txt`, function(err, data){
            threeFileData.push(data.toString());
            done();
          });
        });
      });
    });
  });

  it('should rad the files in order, and provide the first 8 bytes of each file', function(done){
    fileReader(`${__dirname}/../data/one.txt`, function(err, data){
      expect(err).to.equal(null);
      expect(data).to.equal('4920616d20777269');
      expect(data).to.have.length.above(8);
      fileReader(`${__dirname}/../data/two.txt`, function(err, data){
        expect(err).to.equal(null);
        expect(data).to.equal('5468617427732061');
        expect(data).to.have.length.above(8);
        fileReader(`${__dirname}/../data/three.txt`, function(err, data){
          expect(err).to.equal(null);
          expect(data).to.equal('576f772c2049276d');
          expect(data).to.have.length.above(8);
          done();
        });
      });
    });
  });
  it('File not found.', function(done) {
    fileReader('', function(err, data) {
      expect(err).to.exist;
      expect(data).to.not.exist;
      done();
    });
  });
});


  // it('should read the files in order, and provide the first 8 bytes of each file', function(done){
  //   fileReader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err, data){
  //     expect(err).to.equal(null);
  //     expect(data).to.equal('something?');
  //     // TODO:test and see if they are in order?? indexof
  //     // TODO:test length of bytes?
  //     done();
  //   });
  // });
