public class SpinWords {

  public String spinWords(String sentence) {
    String[] words = sentence.split(" ");
    String spinned = "";
    
    for (int i = 0; i < words.length; i++) {
      if (words[i].length() >= 5) {
        words[i] = reverseString(words[i]);
      }
      spinned += words[i] + (i < words.length - 1 ? " " : "");
    }
    return spinned;
  }
  
  public String reverseString(String str) {
    String aux = "";
    for (int i = str.length() - 1; i >= 0; i--) {
      aux += str.charAt(i);
    }
    return aux;
  }
}