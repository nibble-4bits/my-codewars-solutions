package kata

func HasUniqueChar (str string) bool {
  count := make(map[rune]int)
  
  for _, runeVal := range str {
    if  _, seen := count[runeVal]; seen {
      return false
    }
    count[runeVal]++
  }
  
  return true
}