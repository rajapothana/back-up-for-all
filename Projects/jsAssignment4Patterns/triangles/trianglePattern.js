let typeOfTriangle = process.argv[2];
let height = process.argv[3];

const generateLeftAlignedTriangle = function(height) {
  let delimitor = "";
  let alignedTriangle = "";
  let line = "";
  for(let row = 1;row <= height;row++) {
    line = line + "*";
    alignedTriangle += delimitor+line;
    delimitor = "\n"
  }
  return alignedTriangle;
}

const generateRightAlignedTriangle = function(height) {
  let delimitor ="";
  let alignedTriangle ="";
  for(let row = 0; row < height;row++) {
    let line ="";
    let character =" ";
    for(let position = 1;position < (height-row);position++) {
      line += character;
    }
    character ="*"
    for(let position = (height-row);position <= height ;position++) {
      line += character;
    }
    alignedTriangle += delimitor+line;
    delimitor = "\n";
  }
  return alignedTriangle;
}

if(typeOfTriangle == "left") {
  console.log(generateLeftAlignedTriangle(height));
}
if(typeOfTriangle == "right") {
  console.log(generateRightAlignedTriangle(height));
}
