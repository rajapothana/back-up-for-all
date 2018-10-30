#! /usr/bin/awk -f 
BEGIN{
  FS="|"
  num_mvs=0
}
($8 ~/Spanish/ && $9 !~/Spain/ ) {
  num_mvs++
}
END{
  print num_mvs
}
