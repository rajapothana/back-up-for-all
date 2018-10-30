#! usr/bin/awk -f
BEGIN{
  line=0
}
{
 ($2>2000){
   line++
 }
}
END{
  print line
}
