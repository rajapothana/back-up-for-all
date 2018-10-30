const generateStrikeOut = function(word,characterToBeStrike) { 
  let modifiedWord = "";
  for(let position = 0;position < word.length;position++){
    let character = word[position];
    if(character == characterToBeStrike){
     character = "-";
    }
    modifiedWord += character;
  }
  return modifiedWord;
}
console.log(generateStrikeOut(process.argv[2],process.argv[3]));
