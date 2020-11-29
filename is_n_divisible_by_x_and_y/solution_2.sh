#!/bin/bash
if [ $[$1 % $2] -eq 0 ] && [ $[$1 % $3] -eq 0 ]; then
  echo "true"
else
  echo "false"
fi