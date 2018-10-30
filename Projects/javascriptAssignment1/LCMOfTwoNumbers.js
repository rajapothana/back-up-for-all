let firstNumber=16;
let secondNumber=32;
let highestNumber=0;
let GCD=0;
let leastCommonMultiple=0;
if(firstNumber > secondNumber){
  highestNumber=firstNumber;
}else{
  highestNumber=secondNumber;
}
for(let index=1;index<=highestNumber;index++){
  if(firstNumber%i==0 && secondNumber%i==0){
    GCD=index;
  }
  leastCommonMultiple=(firstNumber*secondNumber)/GCD;
}
console.log(leastCommonMultiple);
