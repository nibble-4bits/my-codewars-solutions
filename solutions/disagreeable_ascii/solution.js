function getWeight(name) {
  return name
    .split('')
    .reduce(
      (acc, char) =>
        /[A-Za-z]/.test(char)
          ? /[a-z]/.test(char)
            ? acc + char.charCodeAt() - 32
            : acc + char.charCodeAt() + 32
          : acc + 0,
      0
    );
}