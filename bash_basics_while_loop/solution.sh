#!/bin/bash

countToTwenty() {
  let i=1
  while [ $i -le  20 ]; do
    echo "Count: $i"
    let i++
  done
}

countToTwenty