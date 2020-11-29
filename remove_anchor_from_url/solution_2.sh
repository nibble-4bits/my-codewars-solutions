#!/bin/bash
echo $1 | sed -E 's/#.+//g'