function Mormons(startingNumber, reach, target, missions = 0){
  // Recursive solution
  if (startingNumber >= target) return missions;
  else {
    return Mormons(startingNumber + startingNumber * reach, reach, target, ++missions);
  }
}