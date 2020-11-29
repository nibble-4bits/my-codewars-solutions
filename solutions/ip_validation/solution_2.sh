addr="$1"
grep -P '(((\b1[0-9][0-9]\b|\b2[0-4][0-9]\b|\b25[0-5]\b)|(\b[1-9][0-9]\b)|(\b[1-9]\b))\.?){4}' <<< "$addr" > /dev/null
if [ $? -eq 0 ]; then
  echo "True"
else
  echo "False"
fi