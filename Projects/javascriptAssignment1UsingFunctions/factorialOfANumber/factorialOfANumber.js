let factorial=function(number){
  let factorialValue=1;
  for(let index = number;index >= 1;index--){
    factorialValue=factorialValue*index;
  }
  return factorialValue;
}
console.log(factorial(+process.argv[2]));
