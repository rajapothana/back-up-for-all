const temperature = function(kelvins){
  let centigrade = (5/9)*(kelvins-32);
  return centigrade;
}
let convertionOf = temperature(process.argv[2]);
  console.log(convertionOf+"celsius");
