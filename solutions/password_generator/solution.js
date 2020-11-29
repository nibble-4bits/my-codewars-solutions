function passwordGen(){
  let passwordLength = randInt(6, 20);
  let password = `${String.fromCharCode(randInt(97, 122))}${randInt(0, 9)}${String.fromCharCode(randInt(65, 90))}`;
  
  
  for (let i = 0; i < passwordLength - 3; i++) {
    if (Math.random() > 0.5) {
      if (Math.random() > 0.5)
        password += String.fromCharCode(randInt(97, 122));
      else
        password += String.fromCharCode(randInt(65, 90));
    }
    else {
      password += randInt(0, 9);
    }
  }
  console.log(password)
  return password;
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}