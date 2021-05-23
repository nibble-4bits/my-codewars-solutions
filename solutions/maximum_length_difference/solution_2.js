function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  
  const [max1, min1] = a1.reduce((arr, s) => {
    if (s.length > arr[0]) arr[0] = s.length;
    if (s.length < arr[1]) arr[1] = s.length;
    return arr;
  }, [a1[0].length, a1[0].length]);
  
  const [max2, min2] = a2.reduce((arr, s) => {
    if (s.length > arr[0]) arr[0] = s.length;
    if (s.length < arr[1]) arr[1] = s.length;
    return arr;
  }, [a2[0].length, a2[0].length]);
  
  return Math.max(max1 - min2, max2 - min1);
}