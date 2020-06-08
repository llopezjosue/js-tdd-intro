const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetter, 'function');
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetter('javaScript is magic'), 'JavaScript Is Magic');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetter(''), '');