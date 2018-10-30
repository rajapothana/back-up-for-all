let primeCounter = 0;
let primeCandidate = 2;
let primeCandidateNumber = +process.argv[2];
let primeNumber = 0; 
while(primeCounter < primeCandidateNumber){
  let isPrime = true;
  let threshold = Math.sqrt(primeCandidate);
  for(let index = 2;index<=threshold;index++){
    if(primeCandidate % index == 0){
      isPrime = false;
    }
  }  
  if(isPrime){
    primeNumber = primeCandidate;
    primeCounter += 1;
  }
  primeCandidate +=1;
}
console.log(primeNumber);
