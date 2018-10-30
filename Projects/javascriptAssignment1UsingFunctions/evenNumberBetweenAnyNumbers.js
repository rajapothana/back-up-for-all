const evenNumberSeries = function(num1,num2){
  let endingNumber=num2;
  let startingNumber=num1;
  let evenNumbers="";
  for(let index=startingNumber;index <= endingNumber;index++){
    if(index%2==0){
      evenNumbers+=" "+index;
    }
  }
  return evenNumbers;
}
let findEven = evenNumberSeries(+process.argv[2],+process.argv[3]);
console.log(findEven);
