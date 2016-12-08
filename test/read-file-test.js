'use strict';

const expect = require('chai').expect;
const readFile = require('./../lib/read-file.js');

describe('File Reader', function() {
  it('should read three data files', function() {
    readFile(function(data){
      var result =`${data.toString('hex', 0, 8)} `;
      expect(result).to.equal('68656c6c6f20776f 6c6561726e696e67 646f67206c6f7665');
    });
  });

  it('should throw an error', function() {
    var result = readFile;
    expect(result).to.throw(Error);
  });
});
