inline std::string to_brainfuck (const std::string& s_in) {
  std::string brainFuckStr = "";
  
  for (int i = 0; i < s_in.size(); i++) {
    int charCode = s_in[i];
    for (int j = 0; j < charCode; j++) {
      brainFuckStr += "+";
    }
    brainFuckStr += ".>";
  }
  
  return brainFuckStr;
}