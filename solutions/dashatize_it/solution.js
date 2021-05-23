function dashatize(num) {
  if (!Number.isInteger(num)) {
    return 'NaN';
  } else {
    if (num < 0) num = -num;
    return num.toString().replace(/([13579])/g, '-$1-').replace(/--/g, '-').replace(/^-|-$/g, '');
  }
}