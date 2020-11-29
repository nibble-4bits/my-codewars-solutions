function nextId(ids) {
  if (!ids.includes(0)) return 0;
  
  const idsCopy = [...ids];
  return Math.min(...ids.map(id => id + 1).filter(id => !idsCopy.includes(id)));
}