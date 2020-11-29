#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Nothing to find"
  exit 1
fi

FILE_PATH=$1
if [ -f $FILE_PATH ]; then
  echo "Found ${FILE_PATH}"
else
  echo "Can't find ${FILE_PATH}"
fi