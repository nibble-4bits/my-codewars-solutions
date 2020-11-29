function findMissingLetter(array)
{
  let expectedLetter;
  for (let i = 0; i < array.length - 1; i++) {
    expectedLetter = String.fromCharCode(array[i].charCodeAt(0) + 1);
    if (array[i + 1] !== expectedLetter) return expectedLetter;
  }
}