let string=process.argv[2];
let interspersedString="";
let delimiter="";
for(let index=0;index < string.length;index++){
  interspersedString=interspersedString+delimiter+string[index];
  delimiter=",";
}
console.log(interspersedString);
