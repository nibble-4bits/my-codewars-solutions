public class Kata{
  public static int findSquares(int x, int y){
    int min = Math.min(x, y);
    int squares = x * y;
    
    for (int i = 1; i < min; i++) {
      squares += (x - i) * (y - i);
    }
    
    return squares;
  }
}