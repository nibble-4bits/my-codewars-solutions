package kata

func solution(str, end string) bool {
  if len(str) == 0 && len(end) > 0 {
    return false
  }
  
  for i, j := len(str)-1, len(end)-1; i >= len(str) - len(end); i, j = i-1, j-1 {
    if string(str[i]) != string(end[j]) {
      return false
    }
  }
  
  return true
}