#! /usr/bin/awk -f
BEGIN{
  FS="|"
  largest_region=0
  region=""
};
{
  coastline[$2]+=$4*$6/100
};
END{
  for(coast in coastline){
    if(coastline [coast] > largest_region){
      largest_region=coastline[coast]
      region=coast
    }
  }
  print region
}
