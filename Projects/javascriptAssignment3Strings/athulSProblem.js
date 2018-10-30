let startingNumber = process.argv[2];
let endingNumber = process.argv[3];
let expectedValue = process.argv[4];
let numberstore = "";
while(startingNumber < endingNumber){
  startingNumber++;
  let sum = 0;
  sSN=""+startingNumber
  for(let index=0;index < sSN.length;index++){
    sum += +sSN[index];
    numberStore = startingNumber
  }
  if(sum == expectedValue){
    console.log(numberStore);
  }
}
