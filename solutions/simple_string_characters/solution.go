package kata

import "regexp"

func Solve(s string) []int {
  reUpper := regexp.MustCompile(`[A-Z]`)
  reLower := regexp.MustCompile(`[a-z]`)
  reDigit := regexp.MustCompile(`\d`)
  reSpecial := regexp.MustCompile(`[^A-Za-z0-9]`)
  
  countUpper := len(reUpper.FindAllIndex([]byte(s), -1))
  countLower := len(reLower.FindAllIndex([]byte(s), -1))
  countDigit := len(reDigit.FindAllIndex([]byte(s), -1))
  countSpecial := len(reSpecial.FindAllIndex([]byte(s), -1))


  return []int{countUpper, countLower, countDigit, countSpecial}
}