const temperature = function(degrees){
  let fahrenheit=1.8*degrees+32;
  return fahrenheit;
}
let conversionOf =temperature(+process.argv[2]);
console.log(conversionOf+"Kelvin");
