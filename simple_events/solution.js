function Event() {
  this.handlers = [];
  
  this.subscribe = function(func) {
    this.handlers.push(func);
  }
  
  this.unsubscribe = function(func) {
    this.handlers.splice(this.handlers.findIndex(oldFunc => oldFunc == func), 1);
  }
  
  this.emit = function(...args) {
    this.handlers.forEach(func => {
      func(...args)
    });
  }
}
