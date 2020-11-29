using System.Collections.Generic;

public class Kata
{
  public static int FindMissing(List<int> list)
  {
    int difference = (list[list.Count - 1] - list[0]) / list.Count;
    System.Console.WriteLine(difference);
    int expectedTerm = list[0];
    
    for (int i = 0; i < list.Count - 1; i++) {
      expectedTerm = list[i] + difference;
      if (expectedTerm != list[i + 1]) {
        return expectedTerm;
      }
    }
    
    return expectedTerm;
  }
}