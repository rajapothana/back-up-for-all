#! /usr/bin/awk -f
 BEGIN{
  carry=0
  out_put=""
}
{
  number_line[NR]=$0
}
END{
    slack=0
    for(i=NR;i>=1;i--){
      for(j=length(number_line[i];j>=1;j--){
      split(number_line[i],numbers,"")
      slack=slack+numbers[j]
    }
    slack=slack+carry
      carry=int(slack/10)
      out_put=(slack%10)""out_put
    }
  {
    print carry""out_put
  }
}
