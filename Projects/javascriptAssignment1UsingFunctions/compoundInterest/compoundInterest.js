const compoundInterest = function(principle,rateOfInterest,timePeriod){
  return interest=Math.pow((1+rateOfInterest/100),timePeriod)*principle-principle; 
}
let principle = +process.argv[2];
let rateOfInterest = +process.argv[3];
let timePeriod = +process.argv[4];
console.log(compoundInterest(principle,rateOfInterest,timePeriod));
