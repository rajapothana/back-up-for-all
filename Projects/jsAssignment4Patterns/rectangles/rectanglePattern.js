
const generateLine = function(length,Character){
  let line = "";
  for(let position = 0;position < length;position++) {
    line += Character;
  }
  return line;
}
const lib = require("./generateLine.js");
const generateFilledRectangle = function(length,width) {
  let numberOfLines = 1;
  let line = lib.generateLine(length,"*");
  let rectangle ="";
  while(numberOfLines <= width) {
    rectangle += line+"\n";
    numberOfLines++;
  }
  return rectangle;
}

const generateMiddleLines = function(length,width) {
  let middleLine = "*";
  for(let emptycharacter = 2;emptycharacter < length;emptycharacter++) {
    middleLine += " ";
  }
  middleLine += "*";
  return middleLine;
}

const generateEmptyRectangle = function(length,width) { 
  let numberOfLines = 1; 
  let middlelines = generateMiddleLines(length);
  let emptyRectangle = lib.generateLine(length,"*") +"\n";
  while(numberOfLines < width-1) {
    emptyRectangle += middlelines +"\n";
    numberOfLines++;
  }
  emptyRectangle += lib.generateLine(length,"*");
  return emptyRectangle;
}
const generateAlternativeRectangle = function(length,width) {
  let alternatingRectangle = "";
  let delimitor = "";
  for(let row = 1;row <= width;row++) {
    let character = "-";
    if(row%2 == 1) {
      character = "*";
    }
    alternatingRectangle += delimitor+lib.generateLine(length,character)
    delimitor = "\n";
  }
  return alternatingRectangle;
}
const main = function() {
  let typeOfRectangle = process.argv[2];
  let length = +process.argv[3];
  let width = +process.argv[4];
  if(typeOfRectangle =="filled"){
    console.log(generateFilledRectangle(length,width));
  }
  if(typeOfRectangle =="empty"){
    console.log(generateEmptyRectangle(length,width));
  }
  if(typeOfRectangle =="alternate"){
    console.log(generateAlternativeRectangle(length,width));
  }
}
main();
