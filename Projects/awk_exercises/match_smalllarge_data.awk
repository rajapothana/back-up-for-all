#! /usr/bin/awk -f
BEGIN{
  FS=" "
};
{
  if($1 ~/^1/){
    words=substr($2,length($2)-3)
    =substr($2,1,length($2)-4)
    endwords[words]=i
  }else{
    word=substr($2,1,4)
    l=substr($2,5)
    startingwords[word]=l
  } 
}
END{
  for(endword in endwords){
    print endwords[endword]""endword""startingwords[endword]
  }
}
