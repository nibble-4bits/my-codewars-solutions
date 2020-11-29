function firstNonConsecutive(arr) {
  const nonConsecutives = arr.filter((n, i, arr) => n !== (arr[i - 1] || n - 1) + 1);
  return nonConsecutives.length > 0 ? nonConsecutives[0] : null;
}