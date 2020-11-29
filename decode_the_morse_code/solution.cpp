#include <sstream>

std::string decodeMorse(std::string morseCode) {
    std::stringstream morseChars(morseCode);
    std::string currentMorseChar;
    std::string decoded = "";
    
    while (getline(morseChars, currentMorseChar, ' ')) {
      if (currentMorseChar != "") {
        decoded += MORSE_CODE[currentMorseChar];
      }
      else if (morseChars.peek() != ' ' && decoded != "") {
        decoded += " ";
      }
    }
    
    if (decoded[decoded.size() - 1] == ' ') {
      decoded = decoded.substr(0, decoded.size() - 1);
    }
    
    return decoded;
}