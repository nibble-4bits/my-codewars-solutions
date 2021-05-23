package kata

import "math"

func QuarterOf(month int) int {
  return int(math.Ceil(float64(month) * 4 / 12))
}