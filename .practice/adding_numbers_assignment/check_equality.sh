#!/bin/bash

filename=$1
url="http://bignum.herokuapp.com/check_equality?result="
result=`head -1 $filename`
user=$(whoami)
url_with_params="${url}${result}"
url_with_params="${url_with_params}&u=${user}"
curl -X POST ${url_with_params}
