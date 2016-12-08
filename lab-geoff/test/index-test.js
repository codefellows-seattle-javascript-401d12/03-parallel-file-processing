'use strict';

const exec   = require('child_process').exec;
const expect = require('chai').expect;

describe('Index: index.js', function() {
  describe('Main execution', function() {
    it('should log the first 8 bytes of the files in order', function(done) {
      // I used the bash command: xxd -p filename | head -c 16
      // to determine the expected results from a known
      // utility.
      const expectedResult = [
        '6f6e652e74787420',
        '74776f2e74787420',
        '74687265652e7478',
        ''
      ].join('\n');

      // exec('node index.js', function(err, stdout, stderr) {
      exec('node index.js', function(err, stdout) {
        expect(err).to.not.be.an('error');
        expect(stdout).to.equal(expectedResult);
        done();
      });
    });
  });
});
