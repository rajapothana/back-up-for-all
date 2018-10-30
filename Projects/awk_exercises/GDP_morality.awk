#! /usr/bin/awk -f
BEGIN{
  FS="|"
  highest_morality=0
  country=""
}
($9 > 20000){

  if($8> highest_morality){
    highest_morality=$8
    country=$1
  }
}
END{
  print country
}

