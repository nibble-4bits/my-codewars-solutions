function groupByCommas(n) {
  return n.toString().split('').reduceRight((acc, el, i, arr) => {
    const indexFromZero = arr.length - i - 1;
    return (indexFromZero % 3 === 2) && (arr.length - 1 !== indexFromZero) ? `,${el}${acc}` : el + acc;
  }, '');
}