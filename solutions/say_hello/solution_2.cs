public class Greetings
  {
    public static string greet(string name)
      {
        return string.IsNullOrEmpty(name) ? null : $"hello {name}!";
      }
  }