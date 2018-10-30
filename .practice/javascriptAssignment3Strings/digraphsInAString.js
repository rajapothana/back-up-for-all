let string = process.argv[2];
let digraph =""
for(let index = 0;index < string.length;index++){
  if(string[index] == string[index+1]){
    digraph = string[index]+string[index+1];
    console.log(digraph);
  }
}
