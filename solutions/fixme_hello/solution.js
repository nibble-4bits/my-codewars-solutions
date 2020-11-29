class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = null
        this.orderQueue = [];
    }
    
    setName(name) {
      if (!this.name) {
        this.orderQueue.push(0);
      }
      this.name = name
      return this
    }

    setAge(age) {
      if (!this.age) {
        this.orderQueue.push(1);
      }
      this.age = age
      return this
    }

    setSex(sex) {
      if (!this.sex) {
        this.orderQueue.push(2);
      }
      this.sex = sex
      return this
    }

    hello() {
      let greeting = 'Hello.';
      let nameStr = ` My name is ${this.name}.`;
      let ageStr = ` I am ${this.age}.`;
      let sexStr = ` I am ${this.sex === 'M' ? 'male' : 'female'}.`;
      
      while (this.orderQueue.length > 0) {
        switch (this.orderQueue.shift()) {
          case 0:
            greeting += nameStr;
            break;
          case 1:
            greeting += ageStr;
            break;
          case 2:
            greeting += sexStr;
            break;
        }
      }
      
      return greeting;
    }

}