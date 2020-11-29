function stringIntGreaterThan(a, b) {
  if      (a[0] !== '-' && b[0] === '-') return true; // a is positive and b is negative
  else if (a[0] === '-' && b[0] !== '-') return false; // a is negative and b is positive
  else if (a.length > b.length && a[0] !== '-') return true; // both positive and a has more digits than b
  else if (a.length < b.length && a[0] !== '-') return false; // both positive and a has less digits than b
  else if (a.length > b.length && a[0] === '-') return false; // both negative a has more digits than b
  else if (a.length < b.length && a[0] === '-') return true; // both negative a has less digits than b
  else {
    if (a[0] !== '-' && b[0] !== '-') { // both numbers are positive
      for (let i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) > b.charCodeAt(i)) return true; // first different digit of a is greater than that of b
        else if (a.charCodeAt(i) < b.charCodeAt(i)) return false; // first different digit of a is less than that of b
      }
    }
    else { // both numbers are negative
      for (let i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) > b.charCodeAt(i)) return false; // first different digit of a is greater than that of b
        else if (a.charCodeAt(i) < b.charCodeAt(i)) return true; // first different digit of a is less than that of b
      }
    }
  }
  return false; // the strings are equal
}