package kata

func Solve(s string) rune {
  indices := map[rune][]int{}
  maxValue, diff, mostValuable := -1, 0, []rune(s)[0]
  
  for i, c := range s {
    if _, ok := indices[c]; ok {
      indices[c][1] = i
    } else {
      indices[c] = []int{i, i}
    }
  }

  for key, val := range indices {
    diff = val[1] - val[0]
    if diff > maxValue {
      maxValue = diff
      mostValuable = key
    } else if diff == maxValue && key < mostValuable {
      mostValuable = key
    }
  }
  
  return mostValuable
}