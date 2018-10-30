let string=process.argv[2];
let subString=process.argv[3];
let count=0;
let receive="";
for(let index=0;index < string.length;index++){
  let store=index;
  receive="";
  for(let chart=0;chart < subString.length;chart++){
    if(string[store] == subString[chart]){
      receive=receive+string[store];
      store++;
    } else {
      chart=subString.length;
    }
    
    if(receive == subString){
      count++;
    }
  }
}

console.log(count);
