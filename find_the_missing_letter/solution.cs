public class Kata
{
  public static char FindMissingLetter(char[] array)
  {
    for (int i = 0; i < array.Length - 1; i++)
    {
      char expectedLetter = (char)(((int)array[i]) + 1);
      if (expectedLetter != array[i + 1]) return expectedLetter;
    }
    return ' ';
  }
}