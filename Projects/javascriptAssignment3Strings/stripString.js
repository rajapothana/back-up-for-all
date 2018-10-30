let string=process.argv[2];
let modifiedString="";
for(let index=0;index < string.length;index++){
  let character = string[index];
  if(character == " "){
     character = "";
  }
  modifiedString = modifiedString +character;
}
console.log(modifiedString);
