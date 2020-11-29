#include <iomanip>
std::string decToHex(int decimal);

class RGBToHex
{
  public:
  static std::string rgb(int r, int g, int b);
};

std::string RGBToHex::rgb(int r, int g, int b) {
  r = r > 255 ? 255 : r < 0 ? 0 : r;
  g = g > 255 ? 255 : g < 0 ? 0 : g;
  b = b > 255 ? 255 : b < 0 ? 0 : b;
  return decToHex(r) + decToHex(g) + decToHex(b);
}

std::string decToHex(int decimal) {
  std::ostringstream hexNum;
  hexNum << std::setfill('0') << std::setw(2) << std::hex << std::uppercase << decimal;
  
  return hexNum.str();
}
