#!/bin/bash

DIRNAME=$(dirname $1)
BASENAME=$(basename $1)

echo "$DIRNAME, $(cut -d'.' -f1 <<< $BASENAME), $(cut -d'.' -f2 <<< $BASENAME)"