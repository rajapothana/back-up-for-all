const isMultiple = function(dividend,divisor) {
  return(dividend % divisor == 0);
}

const calculateSumOfMultiples = function(limit) {
  let sum = 0;
  for(let number = 3; number < limit; number+=3) {
      sum += number;
  }
  for(let number = 5; number < limit; number+=5) {
   if(!isMultiple (number,3)){
      sum += number;
   }
  }
  return sum;
}
console.log(calculateSumOfMultiples(+process.argv[2]));
