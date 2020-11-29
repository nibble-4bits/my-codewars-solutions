function Hex(value){
  //...
  this.decVal = value;
  
  this.valueOf = function(){ return this.decVal; };
  
  this.toString = function(){ return `0x${this.valueOf().toString(16).toUpperCase()}`; };
  
  this.toJSON = function(){ return this.toString(); };
  
  this.plus = function(otherHex){ return new Hex(this.valueOf() + otherHex.valueOf()); };
  
  this.minus = function(otherHex){ return new Hex(this.valueOf() - otherHex.valueOf()); }
  
}

Hex.parse = function(string){ 
  return parseInt(string.replace('0x', ''), 16);
}
