std::string get_middle(std::string input) 
{
  if (input.size() % 2 == 0) {
    return input.substr(input.size() / 2 - 1, 2);
  }
  else {
    return input.substr(input.size() / 2, 1);
  }
}