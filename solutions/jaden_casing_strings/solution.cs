using System;
public static class JadenCase
{
  public static string ToJadenCase(this string phrase)
  {
    string[] words = phrase.Split(' ');
    string jadenPhrase = "";
    for (int i = 0; i < words.Length; i++)
    {
        string tmpWord = words[i][0].ToString().ToUpper() + words[i].Substring(1);
        jadenPhrase += tmpWord + (i < words.Length - 1 ? " " : "");
    }

    return jadenPhrase;
  }
}