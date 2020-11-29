function Automaton()
{
   this.states = { q1: 0, q2: 1, q3: 2 };
   this.currentState = this.states.q1;
}

Automaton.prototype.readCommands = function(commands)
{
  for (const command of commands) {
    if (this.currentState === this.states.q1) {
      if (command === '0') continue;
      else this.currentState = this.states.q2;
    }
    else if (this.currentState === this.states.q2) {
      if (command === '0') this.currentState = this.states.q3;
      else continue;
    }
    else if (this.currentState === this.states.q3) {
      this.currentState = this.states.q2;
    }
  }
  
  return this.currentState === this.states.q2 ? true : false;
}

var myAutomaton = new Automaton();

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.