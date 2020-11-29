function reject(array, predicate) {
  let passVals = [];
  for (const val of array) {
    if (!predicate(val)) passVals.push(val);
  }
  return passVals;
}