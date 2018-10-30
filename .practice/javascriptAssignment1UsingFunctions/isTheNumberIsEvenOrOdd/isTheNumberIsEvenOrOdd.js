let isnumberEvenOrOdd = function(num){
  let isNumber ="even"
  if(num % 2 == 1){
    isNumber ="odd"
  }
  return isNumber;
}
console.log(isnumberEvenOrOdd(+process.argv[2]));
