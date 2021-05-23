function myLanguages(results) {
  return Object.entries(results)
    .filter(([, v]) => v >= 60)
    .sort(([, v1], [, v2]) => v2 - v1)
    .map(([k]) => k);
}
