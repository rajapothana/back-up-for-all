const countVowels = function(input) {
  let string = input;
  let vowelsCounter=0;
  let vowels="aeiouAEIOU";
  for(let letter=0;letter < string.length;letter++){
    for(let vowel=0;vowel < vowels.length;vowel++){
      if(string[letter] == vowels[vowel]){
        vowelsCounter++;
      } 
    }
  }
  return vowelsCounter;
}
console.log(countVowels(process.argv[2]));
