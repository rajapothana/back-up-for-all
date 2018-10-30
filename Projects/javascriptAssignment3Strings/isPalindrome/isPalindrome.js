const generateReversedWord = function(word) {
  let reversedWord="";
  for(let position=word.length-1;position >= 0;position--){
    reversedWord+=word[position];
  }
  return reversedWord;
}
const isPalindrome = function(word) {
  let reversedWord = generateReversedWord(word);
  if(word == reversedWord){
    return true;
  }
  return false;
}
console.log(isPalindrome(process.argv[2]));
