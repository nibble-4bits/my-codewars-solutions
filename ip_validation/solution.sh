addr="$1"
grep -P '(((\b1\d{2}\b|\b2[0-4]\d\b|\b25[0-5]\b)|(\b[1-9]\d\b)|(\b[1-9]\b))\.?){4}' <<< "$addr" > /dev/null && echo "True" || echo "False"
