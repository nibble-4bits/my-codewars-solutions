function replicate(times, number) {
  return times > 0 ? [number].concat(replicate(--times, number)) : [];
}