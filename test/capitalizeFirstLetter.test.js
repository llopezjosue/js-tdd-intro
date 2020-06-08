const assert = require('assert');
const capitalizeFirstLetter = require('../capitalizeFirstLetter');


// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetter, 'function');
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetter('javascript is magic'), 'Javascript Is Magic');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetter(''), '');