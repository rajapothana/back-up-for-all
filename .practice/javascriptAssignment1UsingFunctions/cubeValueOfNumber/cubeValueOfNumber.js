let cubeOfNumber = function(number){
let cubeValue=number*number*number;
  return cubeValue;
}
console.log(cubeOfNumber(+process.argv[2]));
