#! /usr/bin/awk -f
{
  if($1== "Can't" || $1=="Bad" ||$1=="Take" || $1=="Typing" || $1=="Trying" || $1=="too" || $1=="Take" || $1=="Some" || $1=="Size" || $1=="Saying" || $1=="Paying" || $1=="No" || $1=="Leaving" || $1=="Long" || $1=="Hard" ||$1=="Lack" ||$1=="Congested" || $2=="have" || $2=="weight" || $3=="low" || $1=="Feared" || $1=="Feeling" || $1=="Missing" || $1=="Boaring"|| $1=="Control" || $1=="Bharat" || $1=="My" || $1=="Need" || $2=="rent" || $1=="Room" ||$1=="To" ||$4=="Chennai" ||$1=="Vibrant" ||$4=="far" || $1=="Not" ||$1=="INJURIES" ||$1=="Foosball" || $1=="Changing" || $1=="MIssing"){
    print "O|" $0
  }
  else{
    print "W|" $0
  } 
}

