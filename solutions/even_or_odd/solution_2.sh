#!/bin/bash
NUM=$1
REMAINDER=$[NUM % 2]

if [ $REMAINDER -eq 0 ]; then
  echo "Even"
else
  echo "Odd"
fi