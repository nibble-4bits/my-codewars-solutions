#!/bin/bash
echo $1 | rev | sed -E 's/^0+//'