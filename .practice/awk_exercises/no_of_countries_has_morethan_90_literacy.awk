#! /usr/bin/bash
BEGIN{
  FS="|"
  no_of_countries=0
};
{
  ($9 > 20000 && $10 < 90){ 
  no_of_countries=no_of_countries+1
  } 
}
END{
  print no_of_countries
};
