package kata

import (
  "strings"
  "unicode"
)

func Solve(s string) string {
  var b strings.Builder
  r := []rune(s)
  
  for i, j := 0, len(r)-1; j >= 0; {
    if !unicode.IsSpace(r[i]) && !unicode.IsSpace(r[j]) {
      b.WriteRune(r[j])
      i, j = i+1, j-1
    } else if unicode.IsSpace(r[i]) {
      b.WriteRune(r[i])
      i++
    } else if unicode.IsSpace(r[j]) {
      j--
    }
  }
  
  return b.String()
}