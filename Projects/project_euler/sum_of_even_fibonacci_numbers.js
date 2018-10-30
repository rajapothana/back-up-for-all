const isEven = function (number) {
  return(number % 2 == 0);
}

const sumOfEvenFibonacci = function(number) {
  let firstNumber=1;
  let secondNumber=2;
  let register = 0;
  let sum=2;

  for(let index=1;index<=number-2;index++){
    register=firstNumber+secondNumber;
    if(isEven(register)){
      sum += register; 
    }
      firstNumber=secondNumber;
      secondNumber=register;
    }
  return sum;
}
console.log(sumOfEvenFibonacci(32));
