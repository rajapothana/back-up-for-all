#! /usr/bin/awk

BEGIN {
  print "tic tac toe"
  print "1=>Play game \n2=>Exit"
  getline number
  if(number==2){
    exit
  }
  print "player-1 name"
  getline name_1
  print "player-2 name"
  getline name_2
  numbers="1,2,3,4,5,6,7,8,9"
  split(numbers,block,",")


(NR%2 == 1){sign = "X"}
(NR%2 == 0){sign = "O"}
count++;
{
  gsub($0,sign,block[$0])
  print "---"" ""---"" ""---"   
  print" "block[1]" ""|"" "block[2]" ""|"" "block[3]" "
  print "---"" ""---"" ""---"   
  print" "block[4]" ""|"" "block[5]" ""|"" "block[6]" "
  print "---"" ""---"" ""---"   
  print " "block[7]" ""|"" "block[8]" ""|"" "block[9]" "
  print "---"" ""---"" ""---"   
  print "type your number"

  if((block[1]==block[2] && block[2]==block[3]) || (block[4]==block[5] && block[5]==block[6]) || (block[7]==block[8] && block[8]==block[9]) || (block[1]==block[4] && block[4]==block[7]) || (block[2]==block[5] && block[5]==block[8]) || (block[3]==block[6] && block[6]==block[9]) || (block[1]==block[5] && block[5]==block[9]) || (block[3]==block[5] && block[5]==block[7]))
  {
    if(sign == x){
      print "player " name1 " won"
      exit
    }else{
    print "player " name2 " won"
    exit
  }

}

if(count>9){
  print "Match Draw"
  exit
}
}
