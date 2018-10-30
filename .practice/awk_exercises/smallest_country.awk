#! /usr/bin/awk -f
BEGIN{
  FS="|"
}
(NR==1){
  area=$4 
  smallest_country=""
} 
($4 < area ){
  area=$4
  smallest_country=$1
}
END{
  print area
  print smallest_country
}
