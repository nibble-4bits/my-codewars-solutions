package kata

type PosPeaks struct {
  Pos   []int
  Peaks []int
}

func PickPeaks(array []int) PosPeaks {
  positions, peaks := make([]int, 0), make([]int, 0)
  isPossiblePlateau := false
  plateauIdx := 0
  
  for i := 1; i < len(array) - 1; i++ {
    if array[i] > array[i-1] && array[i] > array[i+1] { // is peak
      positions = append(positions, i)
      peaks = append(peaks, array[i])
    } else if array[i] > array[i-1] && array[i] == array[i+1] { // is start of possible plateau
      plateauIdx = i
      isPossiblePlateau = true
    } else if array[i] == array[i-1] && array[i] < array[i+1] { // is not a plateau, found a greater number
      isPossiblePlateau = false
    } else if array[i] == array[i-1] && array[i] > array[i+1] && isPossiblePlateau { // is end of plateau
      positions = append(positions, plateauIdx)
      peaks = append(peaks, array[plateauIdx])
      isPossiblePlateau = false
    }
  }
  
  return PosPeaks{positions, peaks}
}
