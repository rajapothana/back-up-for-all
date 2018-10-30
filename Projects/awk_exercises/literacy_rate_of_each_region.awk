#! /usr/bin/awk -f

BEGIN{
  FS="|"
};
{
  total_literates[$2]+=($3*$10/100)
  total_population[$2]+=$3
};
END{
  for(region in total_literates) {
    litercy_rate=total_literates[region]*100/total_population[region]
    print region "\n" litercy_rate
  }
};



