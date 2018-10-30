#! /usr/bin/awk -f
BEGIN{
  FS="|"
  landlocked=""
};
($6==0){
  landlocked=$1
  print landlocked
}
