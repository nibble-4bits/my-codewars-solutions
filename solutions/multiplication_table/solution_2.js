multiplicationTable = function (size) {
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i + 1) * (j + 1))
  );
};
