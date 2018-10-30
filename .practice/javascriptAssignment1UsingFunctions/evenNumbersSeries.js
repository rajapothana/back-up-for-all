const evenNumberSeries = function(number){
  let numberOfEvens=number;
  let evenNumbers="";
  for(let index=1;index<=numberOfEvens;index++){
    if(index%2==0){
      evenNumbers+=" "+index;
    }
  }
  return evenNumbers;
}
let findEven = evenNumberSeries(+process.argv[2]);
console.log(findEven);
