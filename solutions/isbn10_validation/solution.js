function validISBN10(isbn) {
  if (/^\d{9}(\d|X)$/.test(isbn)) {
   return [...isbn].reduce((acc, val, i) => /\d/.test(val) ? acc + parseInt(val) * (i + 1) : acc + 10 * (i + 1), 0) % 11 === 0;
  }
  return false;
}