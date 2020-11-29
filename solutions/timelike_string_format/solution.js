function solution(hour) {
  if (hour < 100 || hour > 9999) throw new Error();
  return hour.toString().replace(/(?=\d{2}$)/, ':');
}