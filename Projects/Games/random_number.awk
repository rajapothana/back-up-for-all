#! /usr/bin/awk -f
BEGIN{
  print "Hai dude! welcome to the random numbers world"
  print "It's time to check your luck"
  print "guess your number from [1-6]"
  score_board=0
}

{
  while(score_board<30){
    getline number
    if(number=="exit"){
      exit
    }
    srand()
    random_number=int(rand()*6)+1
    print random_number
    if(number==random_number){
      print "wow!!! you are right"
      score_board+=10
    }else{
    print"oops## you missed it"
  }
}
print "game is over"
exit 
}
END{
  print score_board
}
