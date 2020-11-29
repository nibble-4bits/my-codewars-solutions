function catalog(s, article) {
  const filteredArticles = s.split(/\n\n/).filter(l => new RegExp(article).test(l));
  
  if (filteredArticles.length === 0) return 'Nothing';
  
  return filteredArticles
          .map(l => {
            const product = l.match(/(?<=<name>).+(?=<\/name>)/);
            const price = l.match(/(?<=<prx>).+(?=<\/prx>)/)
            const quantity = l.match(/(?<=<qty>).+(?=<\/qty>)/)
            return `${product} > prx: $${price} qty: ${quantity}`;
          })
          .join('\r\n')
}