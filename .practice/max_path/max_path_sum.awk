#! /usr/bin/awk -f
BEGIN{
  }
  {
    lines[NR]=$0
  }
  END{
    for(j=NR;j>1;j--){
      stack=""
      split(lines[j],last_numbers," ")
      split(lines[j-1],last_numbers_1," ")
      for (i=1;i<j;i++){ 
        if(last_numbers[i]>last_numbers[i+1]){
          last_numbers_1[i]+=last_numbers[i]
        }else{
        last_numbers_1[i]+=last_numbers[i+1]
      }
    }
    for(i=1;i<j-1;i++)
    {
      if(i==1)
        stack=last_numbers_1[1]
      else
        stack=stack" "last_numbers_1[i]
    }
    lines[j-1]=stack
  }
  print last_numbers_1[i]
}

