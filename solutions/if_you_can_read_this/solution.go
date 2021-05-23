package kata
 
import (
  "strings"
  "unicode"
)
 
func ToNato(words string) string {
  nato := []string{"Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "Xray", "Yankee", "Zulu"}
  wordsLower := strings.ToLower(words)
  var b strings.Builder

  for i, r := range wordsLower {
    if unicode.IsLetter(r) || unicode.IsPunct(r) {
      if unicode.IsLetter(r) {
        b.WriteString(nato[int(r)-97])
      } else {
        b.WriteRune(r)
      }

      if i < len(wordsLower)-1 {
        b.WriteRune(' ')
      }
    }
  }

  return b.String()
}