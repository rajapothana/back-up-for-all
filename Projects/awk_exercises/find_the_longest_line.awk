#! /usr/bin/awk -f
BEGIN{
  length_of_longest_line=0
  num_of_words=0
};
{ 
  length($0) > length_of_longest_line
  length_of_longest_line=length($0)
  longest_line=$0
  num_of_words=NF 
};
END{
  print longest_line 
  print length_of_longest_line
  print num_of_words
};

