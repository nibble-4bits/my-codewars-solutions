package kata

import (
  "fmt"
  "strconv"
)

const BIT_LENGTH = 3
const HAMMING_CHAR_LENGTH = BIT_LENGTH * 8

func Encode(text string) string {
  var binaryRune string
  var tripledBit string
  bits := ""

  for _, r := range text {
    binaryRune = fmt.Sprintf("%08b", r)
    tripledBit = ""
    for _, bit := range binaryRune {
      for i := 0; i < BIT_LENGTH; i++ {
        tripledBit += string(bit)
      }
    }
    bits += tripledBit
  }

  return bits
}

func Decode(bits string) string {
  var tripledBit string
  var unicodeValue int64
  runes := []rune(bits)
  byteStr := ""
  text := ""

  for i := 0; i < len(runes); i += BIT_LENGTH {
    tripledBit = string(runes[i : i+BIT_LENGTH])
    byteStr += getMostCommonBit(tripledBit)
    if i != 0 && i%HAMMING_CHAR_LENGTH == HAMMING_CHAR_LENGTH-BIT_LENGTH {
      unicodeValue, _ = strconv.ParseInt(byteStr, 2, 32)
      text += string(unicodeValue)
      byteStr = ""
    }
  }

  return text
}

func getMostCommonBit(tripledBit string) string {
  zeros, ones := 0, 0

  for _, bit := range tripledBit {
    if bit == '0' {
      zeros++
    } else {
      ones++
    }
  }

  if zeros > ones {
    return "0"
  }
  return "1"
}