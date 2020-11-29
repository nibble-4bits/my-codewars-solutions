function stringTask(s) {
  return s.replace(/[aeiouy]/ig, '').replace(/(?=\w)/g, '.').toLowerCase();
}