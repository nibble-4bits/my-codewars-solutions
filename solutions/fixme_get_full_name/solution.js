class Dinglemouse{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName() {
    return `${this.firstName}${this.firstName && this.lastName ? ' ' : ''}${this.lastName}`;
  } 
}