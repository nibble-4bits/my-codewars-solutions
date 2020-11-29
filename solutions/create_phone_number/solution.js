function createPhoneNumber(numbers){
  let groups = numbers
                 .join('')
                 .match(/(\d{3})(\d{3})(\d{4})/);
  
  return `(${groups[1]}) ${groups[2]}-${groups[3]}`;
}