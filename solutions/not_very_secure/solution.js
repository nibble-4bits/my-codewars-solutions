function alphanumeric(string){
  if (string === '') return false;
  return !/[^A-Za-z0-9]/.test(string);
}