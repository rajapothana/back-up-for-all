#! /usr/bin/awk
{
  if($0 ~/Can't/ || $0 ~/Bad/ || $0 ~/Take/ || $0 ~/Typing/ || $0 ~/Trying/ || $0 ~/too/ || $0 ~/Take/ || $0 ~/Some/ || $0 ~/Size/ || $0 ~/Saying/ || $0 ~/Paying/ || $0 ~/No/ || $0 ~/Leaving/ || $0 ~/Long/ || $0 ~/Hard/ || $0 ~/Lack/ || $0 ~/Congested/ || $0 ~/have/ || $0 ~/weight/ || $0 ~/low/ || $0 ~/Feared/ || $0 ~/Feeling/ || $0 ~/Missing/ || $0 ~/Boaring/ || $0 ~/Control/ || $0 ~/Bharat/ || $0 ~/My/ || $0 ~/Need/ || $0 ~/rent/ || $0 ~/Room/ || $0 ~/To/ || $0 ~/Chennai/ || $0 ~/far/ || $0 ~/Not/ || $0 ~/INJURIES/ || $0 ~/Foosball/ || $0 ~/changing/ || $0 ~/less time/ || $0 ~/Vibrant/){
    print"O|" $0
  }
  else{
    print"W|" $0
  }
}
