function vertMirror(strng) {
  return strng
    .split("\n")
    .map((s) => [...s].reverse().join(''))
    .join("\n");
}
function horMirror(strng) {
  return strng
    .split("\n")
    .map((s, i, arr) => arr[arr.length - i - 1])
    .join("\n");
}
function oper(fct, s) {
  return fct(s);
}