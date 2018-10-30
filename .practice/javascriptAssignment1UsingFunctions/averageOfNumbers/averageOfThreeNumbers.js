let average = function(num1,num2,num3){
let averageOfNumbers=(num1+num2+num3)/3;
return averageOfNumbers;
}
console.log(average(+process.argv[2],+process.argv[3],+process.argv[4]));
