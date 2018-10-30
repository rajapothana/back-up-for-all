#! /usr/bin/awk -f
BEGIN{
  alphabets="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
  key="G,O,K,Q,N,S,E,W,P,M,A,Y,R,B,J,V,D,F,Z,X,C,L,T,I,U,H"
}
{
  line=tolower($0)
  gsub(/[^A-z]/,"",line)
       split(alphabets,in_put,",")
       split(key,out_put,",")
       for (i=1;i<=length(in_put);i++){
         gsub(in_put[i],out_put[i],line)
       }
}
END{
print line
}

