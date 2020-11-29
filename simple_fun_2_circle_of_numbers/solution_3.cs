namespace myjinxin
{
    using System;
    
    public class Kata
    {
        public int CircleOfNumbers(int n, int FirstNumber){
            return (FirstNumber + n / 2) % n;
        }
    }
}