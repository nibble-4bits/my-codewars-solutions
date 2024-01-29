class Dictionary {
  constructor() {
    this.dict = new Map();
  }
  
  newEntry(key, value) {
    this.dict.set(key, value);
  }
  
  look(key) {
    return this.dict.get(key) || `Can't find entry for ${key}`;
  }
}