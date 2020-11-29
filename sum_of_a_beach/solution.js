function sumOfABeach(beach) {
  return (beach.match(/sand|water|fish|sun/ig) || []).length;
}