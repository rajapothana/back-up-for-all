isIndexEven = function({index, element},number){
  //let {index,element} = object;
//  if(isEven(index)){
  //  element.push(number);
 // }
 index++;
  console.log(index,element);
  return object;
}

const extractAlternateNumbers = function(numbers) {
  let initial = {index:0,element:[]};
  numbers.reduce(isIndexEven,initial);
  return initial.element;


}


extractAlternateNumbers([1,2,3,4]);
