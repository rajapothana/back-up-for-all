const lib = require("./generateLine.js");
const assert = require("assert");
const generateFilledRectangle = function(length,width) {
  let numberOfLines = 1;
  let line = lib.generateLine(length,"*");
  let delimitor = "";
  let rectangle ="";
  for (let index=0;index < width;index++){
    rectangle += delimitor+line
    delimitor ="\n";
  }
  return rectangle;
}

assert.equal(generateFilledRectangle(+process.argv[2],+process.argv[3]),"***\n***");
