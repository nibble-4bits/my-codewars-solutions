function length(head) {
  if (!head) return 0;
  
  let len = 1;
  while (head.next) {
    head = head.next;
    len++;
  }
  return len;
}