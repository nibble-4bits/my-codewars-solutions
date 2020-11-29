function nicknameGenerator(name){
  if (name.length < 4) return 'Error: Name too short';
  
  if (/[aeiou]/i.test(name[2])) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}