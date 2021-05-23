package kata

func TwoOldestAges(ages []int) [2]int {
  oldest, secondOldest := 0, 0
  
  for _, age := range ages {
    if age > oldest {
      secondOldest = oldest
      oldest = age
    } else if age > secondOldest {
      secondOldest = age
    }
  }
  
  return [2]int{secondOldest, oldest}
}