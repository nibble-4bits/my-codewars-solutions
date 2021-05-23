package kata

func Solution(word string) string {
  reversed := ""
  for i := len(word) - 1; i >= 0; i-- {
    reversed += string(word[i])
  }
  return reversed
}