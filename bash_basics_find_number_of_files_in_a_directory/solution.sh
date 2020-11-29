#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Nothing to find"
  exit 1
fi

DIR=$1
if [ -d $DIR ]; then
  NUM_FILES=$(find $DIR -type f | wc -l)
  echo "There are $NUM_FILES files in $(pwd)/$DIR"
else
  echo "Directory not found"
fi
