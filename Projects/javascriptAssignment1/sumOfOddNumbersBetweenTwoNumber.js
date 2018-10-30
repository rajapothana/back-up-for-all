let endingNumber=8;
let startingNumber=3;
let sum=0;
for(let index=startingNumber;index<=endingNumber;index++){
  if(startingNumber%2==1){
    sum=sum+startingNumber;
  }
  startingNumber=startingNumber+1;
}
console.log(sum);
