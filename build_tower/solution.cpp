class Kata
{
public:
    std::vector<std::string> towerBuilder(int nFloors);
};

std::vector<std::string> Kata::towerBuilder(int nFloors) {
  std::vector<std::string> tower;
  std::string floor;
  int k = 1;
  
  for (int i = 1; i <= nFloors; i++) {
    floor = "";
    
    for (int j = 0; j < nFloors - i; j++) {
      floor += " ";
    }
    for (int j = 0; j < k; j++) {
      floor += "*";
    }
    for (int j = 0; j < nFloors - i; j++) {
      floor += " ";
    }
    tower.push_back(floor);
    k += 2;
  }
  return tower;
}