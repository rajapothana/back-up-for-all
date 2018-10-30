#! /usr/bin/awk -f

BEGIN{
  FS="|"
  area=0
  total_area=0
};
{
  area=$4
  total_area+=$4
};
END{
  print total_area
};
