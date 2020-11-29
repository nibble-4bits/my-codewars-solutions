#!/bin/bash
nbYear() {
  pop=$1
  years=0
  while [ $pop -lt $4 ]
  do
    growth=$(echo "$pop * $2 * 0.01 / 1" | bc)
    pop=$(( $pop + $growth + $3 ))
    years=$(( $years + 1 ))
  done
  echo "$years"
}

nbYear $1 $2 $3 $4