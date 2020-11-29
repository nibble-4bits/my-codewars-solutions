using System;

public class Kata
{
  public static int FindLongest(int[] number)
  {
    int digits;
    int max_digits = 0;
    int max_index = 0;
    
    for (int i = 0; i < number.Length; i++) {
      digits = (int) Math.Log10(Math.Abs(number[i])) + 1;
      if (digits > max_digits) {
        max_digits = digits;
        max_index = i;
      }
    }
    
    return number[max_index];
  }
}