#include <cmath>
#include <iostream>
class Kata
{
public:
    static std::vector<int> Encode(std::string str, int n);
};

std::vector<int> Kata::Encode(std::string str, int n) {
  std::vector<int> cipher;
  std::vector<int> keyDigits;
  int div = n;
  int numDiv = 0;
  int digit;
  
  while (div > 10) {
    div /= 10;
    numDiv++;
  }
  
  for (int i = numDiv; i >= 0; i--) {
    digit = n / std::pow(10, i);
    keyDigits.push_back(digit);
    n -= digit * std::pow(10, i);
    std::cout << i << " " << digit;
  }
  
  for (int i = 0; i < str.size(); i++) {
    int numCode = str[i] - 96;
    numCode += keyDigits[i % keyDigits.size()];
    cipher.push_back(numCode);
  }
  
  return cipher;
}