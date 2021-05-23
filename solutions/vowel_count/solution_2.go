package kata

func GetCount(str string) (count int) {
  for _, c := range str {
    if c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' {
      count++
    }
  }
  
  return
}