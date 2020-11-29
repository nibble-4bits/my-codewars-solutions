#include <string>
#include <vector>

class LongestConsec
{
public:
    static std::string longestConsec(std::vector<std::string> &strarr, int k);
};

std::string LongestConsec::longestConsec(std::vector<std::string> &strarr, int k) {
  std::string longestStr = "";
  std::string testStr;
  
  if (strarr.size() == 0 || k > strarr.size() || k <= 0) {
    return longestStr;
  }
  
  for (int i = 0; i <= strarr.size() - k; i++) {
    testStr = "";
    for (int j = i; j < i + k; j++) {
      testStr += strarr[j];
    }
    if (testStr.size() > longestStr.size()) {
      longestStr = testStr;
    }
  }
  
  return longestStr;
}