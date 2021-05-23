package kata

func monkeyCount(n int) []int {
  monkeys := make([]int, n)
  
  for i := 0; i < n; i++ {
    monkeys[i] = i + 1
  }
  
  return monkeys
}