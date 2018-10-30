let string=process.argv[2];
let reversedString="";
for(let i=string.length-1;i >= 0;i--){
  reversedString=reversedString+string[i];
}
console.log(reversedString);
