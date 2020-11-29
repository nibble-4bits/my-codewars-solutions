#!/bin/bash
nbDig() {
  seq 0 $1 | sed 's/$/^2/' | bc | grep -o $2 | wc -l
}
nbDig $1 $2