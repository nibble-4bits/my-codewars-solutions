function twoSum(numbers, target) {
  const map = new Map();
  
  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i);
  }
  
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [i, map.get(target - numbers[i])];
    }
  }
  
  return null;
}