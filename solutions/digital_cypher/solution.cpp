#include <cmath>
#include <string>

class Kata
{
public:
    static std::vector<int> Encode(std::string str, int n);
};

std::vector<int> Kata::Encode(std::string str, int n) {
  std::vector<int> cipher;
  std::string key = std::to_string(n);
  
  for (int i = 0; i < str.size(); i++) {
    int numCode = str[i] - 96;
    numCode += static_cast<int>(key[i % key.size()] - '0');
    cipher.push_back(numCode);
  }
  
  return cipher;
}