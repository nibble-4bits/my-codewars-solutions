std::vector<int> reverseSeq(int n) {
  std::vector<int> revSeq;
  for (int i = n; i > 0; i--) {
    revSeq.push_back(i);
  }
  return revSeq;
}