const generateLine = function(character,noOfCharacters) {
  let line ="";
  for(let characterCount = 0;characterCount < noOfCharacters;characterCount++) {
    line += character;
  }
  return line;
}

const generateFilledDiamond = function(height) {
  let filledDiamondPattern ="";
  let delimitor ="";
  let noOfCharacters = Math.floor(height/2);
  for(let row = 1;row <= height;row+=2) {
    filledDiamondPattern += delimitor+generateLine(" ",noOfCharacters)+generateLine("*",row);
    noOfCharacters--;
    delimitor ="\n";
  }
  let noOfSpaces = 1;
  let noOfStars = height-2;
  let noOfLines = Math.floor(height/2);
  for(let row = 0; row < noOfLines;row++){
    filledDiamondPattern += delimitor + generateLine(" ",noOfSpaces) + generateLine("*",noOfStars);
    delimitor ="\n";
    noOfSpaces++;
    noOfStars-=2;
  }
  return filledDiamondPattern;
}

const generateHollowDiamond = function(height){
  if(height <= 1){
    return generateLine("*",height);
  }
  let noOfSpaces = Math.floor(height/2);
  let diamond= generateLine(" ",noOfSpaces) + "*"; 
  noOfSpaces--;
  let delimitor ="\n";
  for(let row = 1; row < height-1; row += 2) {
    diamond += delimitor + generateLine(" ",noOfSpaces) + "*" + generateLine(" ",row) +"*";
    noOfSpaces--;
  }
  //2nd part
  delimitor ="\n";
  noOfSpaces = 1;
  for(let row = (height-4); row > 0; row-=2) { 
    diamond += delimitor + generateLine(" ",noOfSpaces) + "*" + generateLine(" ",row) +"*"; 
    noOfSpaces++;
  }
  diamond += delimitor+generateLine(" ",noOfSpaces) + "*";
  return diamond;
}
const generateAngleDiamond = function(height) {
  if(height <= 1){
    return generateLine("*",height);
  }
  let noOfSpaces = Math.floor(height/2);
  let diamond= generateLine(" ",noOfSpaces) + "*"; 
  noOfSpaces--;
  let delimitor ="\n";
  for(let row = 1; row < height-2; row += 2) {
    diamond += delimitor + generateLine(" ",noOfSpaces) + "/" + generateLine(" ",row) +"\\";
    noOfSpaces--;
  }
  diamond += delimitor + "*" + generateLine(" ",height-2) + "*"

  //2nd part
  delimitor ="\n";
  noOfSpaces = 1;
  for(let row = (height-4); row > 0; row-=2) { 
    diamond += delimitor + generateLine(" ",noOfSpaces) + "\\" + generateLine(" ",row) +"/"; 
    noOfSpaces++;
  }
  diamond += delimitor+generateLine(" ",noOfSpaces) + "*";
  return diamond;
}
const main = function(){
  let typeOfDiamond = process.argv[2];
  let height = (Math.ceil((+process.argv[3])/2)*2)-1;
  if(typeOfDiamond == "filled"){
    console.log(generateFilledDiamond(height));
  }
  if(typeOfDiamond == "hollow"){
    console.log(generateHollowDiamond(height));
  }
  if(typeOfDiamond == "angle"){
    console.log(generateAngleDiamond(height));
  }
}
main();
