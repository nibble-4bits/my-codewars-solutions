var countSheep = function (num){
  return new Array(num).fill('').map((x, i) => `${i + 1} sheep...`).join('');
}