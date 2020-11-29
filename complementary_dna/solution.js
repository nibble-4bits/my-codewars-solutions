function DNAStrand(dna){
  let dnaDict = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return dna.split('').map(char => dnaDict[char]).join('');
}