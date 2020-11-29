#!/bin/bash
repeat=$1
string=$2
i=0

while [ $i -lt $repeat ]
do
  echo -n $string
  let i++
done