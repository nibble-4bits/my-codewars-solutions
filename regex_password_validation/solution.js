function validate(password) {
  return !/\W/.test(password) &&
         /[a-z]/.test(password) && 
         /[A-Z]/.test(password) && 
         /\d/.test(password) && 
         password.length >= 6;
}