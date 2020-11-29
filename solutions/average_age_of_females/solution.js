function averageFemale(list) {
  const totalFemales = list.filter(p => p.gender === 'female').length;
  
  if (!totalFemales) return 0;
  return list.reduce((acc, n) => n.gender === 'female' ? acc + n.age : acc, 0) / totalFemales;
}