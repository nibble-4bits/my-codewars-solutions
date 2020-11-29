#include <string>
using namespace std;

string alphabetWar(string fight)
{
  int lside = 0, rside = 0;
  
  for (char letter : fight) {
    switch (letter) {
      case 'w':
        lside += 4;
        break;
      case 'p':
        lside += 3;
        break;
      case 'b':
        lside += 2;
        break;
      case 's':
        lside += 1;
        break;
      case 'm':
        rside += 4;
        break;
      case 'q':
        rside += 3;
        break;
      case 'd':
        rside += 2;
        break;
      case 'z':
        rside += 1;
        break;
    }
  }
  
  if (lside > rside) {
    return "Left side wins!";
  }
  else if (rside > lside) {
    return "Right side wins!";
  }
  else {
    return "Let's fight again!";
  }
}