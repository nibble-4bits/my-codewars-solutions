function decrypt(encryption) {
  console.log(encryption+ "\n\n")
  return [...encryption]
            .filter(c => /[a-z]/.test(c))
            .map(c => c.charCodeAt() - 97)
            .reduce((acc, n) => { acc[n] += 1; return acc; }, Array.from({ length: 26 }, _ => 0))
            .join('');
}