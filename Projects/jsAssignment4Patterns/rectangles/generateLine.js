const generateLine = function(length,character){
  let line = "";
  for(let position = 0;position < length;position++) {
    line = line + character;
  }
  return line;
}
exports.generateLine = generateLine;

