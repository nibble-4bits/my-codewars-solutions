package kata

func max(a, b int) int {
  if a > b {
    return a
  } else {
    return b
  }
}

func MxDifLg(a1 []string, a2 []string) int {
  if len(a1) == 0 || len(a2) == 0 {
    return -1
  }
  
  aLongest, bLongest, aShortest, bShortest := len(a1[0]), len(a2[0]), len(a1[0]), len(a2[0])
  
  for _, str := range a1 {
    strLen := len(str)
    if strLen > aLongest {
      aLongest = strLen
    }
    if strLen < aShortest {
      aShortest = strLen
    }
  }
  
  for _, str := range a2 {
    strLen := len(str)
    if strLen > bLongest {
      bLongest = strLen
    }
    if strLen < bShortest {
      bShortest = strLen
    }
  }
  
  diff1 := aLongest - bShortest
  diff2 := bLongest - aShortest

  return max(diff1, diff2)
}