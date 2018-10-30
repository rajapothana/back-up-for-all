const main = require("./main.js")

const assert = require("assert");
assert.equal(main.main(4,4),8);
assert.equal(main.main(24,48),72);
console.log("test passed");
