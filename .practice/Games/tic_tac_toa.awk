#! /usr/bin/awk
BEGIN{
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
 }
 
  (NR%2 == 1){sign = "X"}
  (NR%2 == 0){sign = "O"}
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
}
