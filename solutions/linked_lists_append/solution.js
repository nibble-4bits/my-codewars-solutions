function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!listA && !listB) return null;
  else if (listA && !listB) return listA;
  else if (listB && !listA) return listB;
  
  let currNode = listA;
  while (currNode.next) {
    currNode = currNode.next;
  }
  currNode.next = listB;
  
  return listA;
}