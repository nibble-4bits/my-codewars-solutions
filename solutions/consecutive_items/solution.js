function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    
    if (curr === a && next === b || curr === b && next === a) return true;
  }
  
  return false;
}