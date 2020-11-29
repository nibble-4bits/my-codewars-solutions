#!/bin/bash
echo $1 | grep -o '[AaEeIiOoUu]' | wc -l