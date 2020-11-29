#!/bin/bash
echo $(ls -ltr | grep ^- | tail -1 | awk -F' ' '{print $9}')