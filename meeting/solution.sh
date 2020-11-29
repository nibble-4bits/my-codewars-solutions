#!/bin/bash
tr '[:lower:]:;' '[:upper:]\t\n' <<< $1 | 
sort -k2 |
awk 'BEGIN { ORS = "" } { print "(" $2 ", " $1 ")" }'