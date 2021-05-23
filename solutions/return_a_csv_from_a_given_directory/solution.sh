#!/bin/bash

DIRNAME=$(dirname $1)
BASENAME=$(basename $1 | cut -d'.' -f 1)
EXTENSION=$(basename $1 | cut -d'.' -f 2)
echo "$DIRNAME, $BASENAME, $EXTENSION"