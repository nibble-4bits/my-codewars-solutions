int solution(int number) 
{
  int sum = 0; // the accumulated sum of the multiples of 3 or 5
  
  // we loop from 3 (not caring about 1 or 2) to number-1
  for (int i = 3; i < number; i++) {
    // if i is divisible by 3 or 5...
    if (i % 3 == 0 || i % 5 == 0) {
      // ...we sum that number to our current sum
      sum += i;
    }
  }
  
  return sum;
}