#!/bin/bash
printerError() {
  CHARS=$(echo $1 | sed 's/\(.\)/\1\n/g')
  BAD=$(grep -c [^a-m] <<< $CHARS)
  TOTAL=$(grep -c . <<< $CHARS)
  echo "$BAD/$TOTAL"
}
printerError $1