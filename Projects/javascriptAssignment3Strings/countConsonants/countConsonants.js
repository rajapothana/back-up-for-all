const countConsonants = function(input) {
  let consonantsCounter=0;
  let consonants="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  for(let position=0;position < input.length;position++){
    for(let character=0;character < consonants.length;character++){
      if(input[position] == consonants[character]){
        consonantsCounter++;
        character = consonants.length;
      } 
    }
  }
  return consonantsCounter;
}
console.log(countConsonants(process.argv[2]));
