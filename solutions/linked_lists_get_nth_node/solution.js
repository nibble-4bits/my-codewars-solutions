function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index, currentIndex = 0) {
  if (!node) throw new Error();
  
  if (currentIndex === index) return node;
  else return getNth(node.next, index, currentIndex + 1);
}
