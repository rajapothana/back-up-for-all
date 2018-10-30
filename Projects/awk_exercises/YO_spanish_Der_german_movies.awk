#! /usr/bin/awk
BEGIN {
  FS="|"
  number=0
};

($8 ~/Spanish/){
  print "Yo" "," $1
  number++
};

($8 ~/German/){
  print "Der" "," $1
  number++
};

END {
  print number

};



