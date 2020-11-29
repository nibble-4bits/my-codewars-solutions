"use strict";

function flattenAndSort(array) {
  return array.reduce((acc, i) => acc.concat(i), []).sort((a, b) => a - b);
}