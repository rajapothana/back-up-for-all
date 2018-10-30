let numbers=7;
let firstNumber=0;
let secondNumber=1;
let register=0;
console.log(firstNumber);
console.log(secondNumber);
for(let index=1;index<=numbers-2;index++){
  register=firstNumber+secondNumber;
  console.log(register);
  firstNumber=secondNumber;
  secondNumber=register;
}
