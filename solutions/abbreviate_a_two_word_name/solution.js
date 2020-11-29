function abbrevName(name){
  [fName, lName] = name.toUpperCase().split(' ');
  return `${fName[0]}.${lName[0]}`;
}