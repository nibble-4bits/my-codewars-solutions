function solution(nums) {
  if (!nums || !nums.length) return [];
  return nums.sort((a, b) => a - b);
}