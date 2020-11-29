function removeChar() {
  NEW_STRING=$(echo $1 | sed s/^.//)
  NEW_STRING=$(echo $NEW_STRING | sed s/.$//)
  echo $NEW_STRING
}
removeChar $1