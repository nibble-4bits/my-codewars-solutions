var format = function (str, obj) {
  let strCopy = str;
  
  for (const key of Object.keys(obj)) {
    strCopy = strCopy
      .replace(
      new RegExp(String.raw`\{${key}\}`, 'g'), 
      obj[key].toString().replace(/(?=\{|\})/g, '\\')
    );
  }
  strCopy = strCopy.replace(/\\/g, '');
  
  return strCopy;
};