package kata

import "strings"

func FindShort(s string) int {
  words := strings.Split(s, " ")
  shortest := len(s)
  
  for _, word := range words {
    if (len(word) < shortest) {
      shortest = len(word)
    }
  }
  
  return shortest
}