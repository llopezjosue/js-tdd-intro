const assert = require('assert');

function capitalizeFirstLetter(str) {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetter, 'function');
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetter('javascript is magic'), 'Javascript Is Magic');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetter(''), '');