var assert = require('assert');

const prefix = require('../js/prefixer');

describe('Prefixer tests', function() {

  describe('Simple case', function() {
    it('Input is prefixed', function() {

      // Ceci est le résultat attendu :
      const expectedResult = '[YO] A string to prefix';

      // Nous testons que la fonction prefix retourne bien le résultat attendu
      assert.equal( prefix('YO', 'A string to prefix'), expectedResult);
    });
  });

  describe('LowerCase input', function() {
    it('Should uppercase the prefix', function() {
      const expectedResult = '[JIM] A string to prefix';
      assert.equal( prefix('jim', 'A string to prefix'), expectedResult);
    });
  });

  describe('Trimed String', function() {
    it('The string to prefix should be trimed.', function() {
      const expectedResult = '[JIM] A lot of space around !'
      assert.equal( prefix('JIM', '    A lot of space around !    '), expectedResult);
    });
  });


  });