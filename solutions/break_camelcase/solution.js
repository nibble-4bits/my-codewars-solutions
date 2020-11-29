// complete the function
function solution(string) {
  return string.split(/(?<=[a-z])(?=[A-Z])/).join(' ');
}
