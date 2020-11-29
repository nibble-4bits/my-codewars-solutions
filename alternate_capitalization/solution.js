function capitalize(s){
  return [
    s.replace(/\w/g, (m, i) => i % 2 === 0 ? m.toUpperCase() : m),
    s.replace(/\w/g, (m, i) => i % 2 === 1 ? m.toUpperCase() : m)
  ];
};