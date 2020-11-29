var createIterator = function (func, n) {
  return function(funcArg) {
    let argCopy = funcArg;
    for (let i = 0; i < n; i++) argCopy = func(argCopy);
    return argCopy;
  }
};