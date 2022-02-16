var assert = require('assert');

const prefix = require('../js/prefixer');

console.log(prefix('jim', 'Je suis une chaine'));

describe('Prefixer tests', function() {

  describe('Simple case', function() {
    it('Input is prefixed', function() {
      assert.equal( prefix('YO', 'A string to prefix'), '[YO] A string to prefix');
    });
  });

  describe('LowerCase input', function() {
    it('Should uppercase the prefix', function() {
      assert.equal( prefix('JIM', 'A string to prefix'), '[JIM] A string to prefix');
    });
  });

  describe('Trimed String', function() {
    it('The string to prefix should be trimed.', function() {
      assert.equal( prefix('JIM', '    A lot of space around !    '), '[JIM] A lot of space around !');
    });
  });


  });