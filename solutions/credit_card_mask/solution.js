function maskify(cc) {
  return cc.replace(/\w(?=\w{4})/g, '#');
}
