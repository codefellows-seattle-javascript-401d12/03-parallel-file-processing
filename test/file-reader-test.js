'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('Files', function(){
  describe('read files asynchronously?', function(){
    var threeFileData = [];
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

  it('should read the files in order', function(done){
    fileReader([`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`], function(err, data){
      expect(err).to.equal(null);
      expect(data).to.equal('something?');
      // TODO:test and see if they are in order?? indexof
      // TODO:test length of bytes?
      done();
    });
  });
});
