#! /usr/bin/awk -f
BEGIN{
  FS="|"
};
{ 
  arable_land += $4*$12/100
  total_land += $4
}
END{
    percentage_of_arable=(arable_land/total_land*100)
    print percentage_of_arable
}
