const assert = require("assert");
const lib = require("./add.js");
sum = lib.sum;
assert.equal(sum(4,5),9)
console.log("test passed")
console.log(lib.testLibrary);

