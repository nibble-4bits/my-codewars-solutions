function longestRepetition(s) {
  if (!s) return ['', 0];
  
  let reps = s.match(/(.)(\1+)?/g);
  let maxLen = Math.max(...reps.map(x => x.length));
  
  return [reps[reps.map(x => x.length).indexOf(maxLen)][0], maxLen];
}