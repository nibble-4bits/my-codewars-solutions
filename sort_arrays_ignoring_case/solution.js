// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
  return names.sort((a, b) => a[0].toLowerCase().charCodeAt() - b[0].toLowerCase().charCodeAt());
}
