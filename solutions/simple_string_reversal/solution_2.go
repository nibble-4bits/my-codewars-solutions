package kata

import "strings"

func Solve(s string) string {
  var b strings.Builder
  
  for i, j := 0, len(s)-1; j >= 0; {
    if string(s[i]) != " " && string(s[j]) != " " {
      b.WriteByte(s[j])
      i, j = i+1, j-1
    } else if string(s[i]) == " " {
      b.WriteByte(s[i])
      i++
    } else if string(s[j]) == " " {
      j--
    }
  }
  
  return b.String()
}