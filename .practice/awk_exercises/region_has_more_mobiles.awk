#! /usr/bin/awk -f
BEGIN{
  FS="|" 
  largest_region_has_more_phones=0
  largest_region=""
}
{
  no_of_phones[$2]+=$3*$11/1000
  total_population[$2]+=$3
}
END{
  for(region in no_of_phones){
    phones_rate=no_of_phones[region]/total_population[region]*100
    if (phones_rate >  largest_region_has_more_phones){
      largest_region_has_more_phones=phones_rate
      largest_region=region
    } 
  }

  print largest_region "|" largest_region_has_more_phones
}
