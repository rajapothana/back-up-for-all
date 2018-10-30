let firstNumber=16;
let secondNumber=32;
let highestNumber=0;
let GCD=0;
if(firstNumber > secondNumber){
  highestNumber=firstNumber;
}else{
  highestNumber=secondNumber;
}
for(let index=1;index<=highestNumber;index++){
  if(firstNumber%index==0 && secondNumber%index==0){
    GCD=index;
  }
}
console.log(greatestCommonDivisor);
