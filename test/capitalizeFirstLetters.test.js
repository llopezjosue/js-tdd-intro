const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');


describe('capitalizeFirst', () => {
    // give the test a label using it
    it('is a function accepting one argument', () => {
      assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    });
  
    it('transforms javascript is magic correctly', () => {
      assert.strictEqual(capitalizeFirstLetters('javascript is magic'), 'Javascript Is Magic');
    });
  
    it('works with a 1-character string', () => {
      assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });
  
    it('works with an empty string', () => {
      assert.strictEqual(capitalizeFirstLetters(''), '');
    });
  });