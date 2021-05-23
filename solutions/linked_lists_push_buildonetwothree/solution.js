function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  const node = new Node(data);
  node.next = head;
  
  return node;
}

function buildOneTwoThree() {
  let head = null;
  
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);
  
  return head;
}