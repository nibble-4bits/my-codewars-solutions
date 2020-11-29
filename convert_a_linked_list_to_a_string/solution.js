function stringify(list) {
  if (!list) return 'null';
  else return `${list.data} -> ` + stringify(list.next);
}