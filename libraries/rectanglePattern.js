
const generateLine = function(length,Character){
  let line = "";
  for(let position = 0;position < length;position++) {
    line += Character;
  }
  return line;
}
const generateFilledRectangle = function(length,width) {
  let numberOfLines = 1;
  let line = generateLine(length,"*");
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
  let emptyRectangle = generateLine(length,"*") +"\n";
  while(numberOfLines < width-1) {
    emptyRectangle += middlelines +"\n";
    numberOfLines++;
  }
  emptyRectangle += generateLine(length,"*");
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
    alternatingRectangle += delimitor+generateLine(length,character)
    delimitor = "\n";
  }
  return alternatingRectangle;
}
const createRectangleTypeOf = function (typeOfRectangle,length,width) {
  if(typeOfRectangle =="filled"){
    return generateFilledRectangle(length,width);
  }
  if(typeOfRectangle =="empty"){
    return generateEmptyRectangle(length,width);
  }
  if(typeOfRectangle =="alternate"){
    return generateAlternativeRectangle(length,width);
  }
}

exports.createRectangleTypeOf = createRectangleTypeOf;
