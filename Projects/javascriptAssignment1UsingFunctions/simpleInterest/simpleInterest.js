const simpleInterest = function(principle,rateOfInterest,timePeriod){
return Interest=principle*rateOfInterest*timePeriod/100;
}
let principle = +process.argv[2];
let rateOfInterest = +process.argv[3];
let timePeriod = +process.argv[4];
console.log(simpleInterest(principle,rateOfInterest,timePeriod));
