package kata

func FindOdd(seq []int) int {
  var oddInt int
  m := map[int]int{}
  
  for _, n := range seq {
    m[n]++
  }
  
  for k, v := range m {
    if v % 2 == 1 {
      oddInt = k
      break
    }
  }
  
  return oddInt
}