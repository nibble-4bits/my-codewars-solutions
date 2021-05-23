function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let currNode = head;
  let len = 0;
  
  while (currNode) {
    len++;
    currNode = currNode.next;
  }
  
  return len;
}

function count(head, data) {
  let currNode = head;
  let c = 0;
  
  while (currNode) {
    currNode.data === data && c++;
    currNode = currNode.next;
  }
  
  return c;
}