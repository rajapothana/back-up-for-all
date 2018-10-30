let numbers = function(number1,number2,number3){
  let greatestNumber=0;
  if(number1 > greatestNumber){
    greatestNumber=number1;
  }
  if(number2 > greatestNumber){
    greatestNumber=number2;
  }
  if(number3 > greatestNumber){
    greatestNumber=number3;
  }
  return greatestNumber;
}
console.log(numbers(+process.argv[2],+process.argv[3],+process.argv[4]));
