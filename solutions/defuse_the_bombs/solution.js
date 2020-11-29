// Bomb 10
Bomb.diffuse(42);

// Bomb 9
Bomb.diffuse(0);
Bomb.diffuse(1);
Bomb.diffuse(2);
Bomb.diffuse(3);
Bomb.diffuse(4);

// Bomb 8
Bomb.diffuse(this.global.BombKey);

// Bomb 7
diffuseTheBomb = () => true;
Bomb.diffuse();

// Bomb 6
Bomb.diffuse(3.14159);

// Bomb 5
const date = new Date();
date.setYear(date.getFullYear() - 4);
Bomb.diffuse(date);

// Bomb 4
const obj = { key: 43 };
Object.freeze(obj);
Bomb.diffuse(obj);

// Bomb 3
const obj2 = function() {
  let flag = false;
  this.valueOf = function() {
    if (flag) {
      return 11;
    }
    flag = true;
    return 9;
  }
}
Bomb.diffuse(new obj2());

// Bomb 2
let randomState = false;
Math.random = function() {
  if (!randomState) {
    randomState = true;
    return 0.5;
  }
  return 1;
}
Bomb.diffuse(42);

// Bomb 1
Array.prototype.valueOf = () => 14;
Bomb.diffuse('eWVz');

// Useful console log statements to figure out the solution to each bomb
// console.log(Bomb.diffuse.toString());
// console.log(Bomb);
// console.log( this );