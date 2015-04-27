var assert = require('assert');
var requuire_ver = require('./require-version');  // This should hijack require.

console.log("** Testing version 1.0.0");
var v1 = require("evalScope@1.0.0");

assert.strictEqual("1.0.0", v1.version());
assert.notEqual(v1.q, undefined);

console.log("** Testing version 2.0.0");

var v2 = require("evalScope@2.0.0");

assert.strictEqual("2.0.0", v2.version());
assert.notEqual(v2.q, undefined);

// Make sure node package manager does the right thing.
assert.notEqual(v1.q, v2.q);

console.log("** Testing complete **")