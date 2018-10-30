let principle=2000;
let rateOfInterest=5;
let time=2;
let compoundInterest=Math.pow((1+rateOfInterest/100),time)*principle-principle;
console.log(compoundInterest);
