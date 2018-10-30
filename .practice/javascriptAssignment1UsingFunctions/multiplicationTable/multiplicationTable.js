const multiplicationTable = function(num1,num2){
  let product =""
  let delimitor = "";
  for(let multiplier = 1;multiplier <= num2;multiplier++){
    product += delimitor+ num1*multiplier;
    delimitor = "\n"
  }
    return product;
}
  console.log(multiplicationTable(+process.argv[2],+process.argv[3])); 
