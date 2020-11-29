using System;

namespace Solution
{
  public static class Program
  {
    public static int binToDec(string s)
    {
      int dec = 0;
      for (int i = 0; i < s.Length; i++)
      {
        if (s[i] == '1')
        {
          dec += (int) Math.Pow(2, s.Length - i - 1);
        }
      }
      return dec;
    }
  }
}