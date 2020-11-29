#!/bin/bash

STR1=$1
STR2=$2

STR1_TRANSFORMED=$(rev <<< $STR1 | tr 'A-Za-z' 'a-zA-Z')
STR2_TRANSFORMED=$(rev <<< $STR2 | tr 'A-Za-z' 'a-zA-Z')
echo "$STR2_TRANSFORMED@@@$STR1_TRANSFORMED$(rev <<< $STR1_TRANSFORMED)"