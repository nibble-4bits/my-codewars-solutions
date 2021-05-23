package kata

func NbYear(p0 int, percent float64, aug int, p int) int {
  if p0 >= p {
    return 0
  } else {
    return 1 + NbYear(p0 + aug + int(float64(p0) * (percent / 100)), percent, aug, p)
  }
}