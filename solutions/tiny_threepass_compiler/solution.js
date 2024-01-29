class Compiler {
  #currIdx = 0;
  #args = new Map();
  #tokens = null;

  compile(program) {
    return this.pass3(this.pass2(this.pass1(program)));
  }

  tokenize(program) {
    // Turn a program string into an array of tokens.  Each token
    // is either '[', ']', '(', ')', '+', '-', '*', '/', a variable
    // name or a number (as a string)
    const regex = /\s*([-+*/\(\)\[\]]|[A-Za-z]+|[0-9]+)\s*/g;
    return program
      .replace(regex, ":$1")
      .substring(1)
      .split(":")
      .map(function (tok) {
        return isNaN(tok) ? tok : tok | 0;
      });
  }

  pass1(program) {
    this.#tokens = this.tokenize(program);

    let i = 0;
    this.#currIdx++; // Consume '['
    while (this.#tokens[this.#currIdx] !== "]") {
      this.#args.set(this.#tokens[this.#currIdx++], i++);
    }
    this.#currIdx++; // Consume ']'

    const ast = this.#expression();
    this.#currIdx = 0;
    return ast;
  }

  pass2(ast) {
    if (ast.a) this.pass2(ast.a);
    if (ast.b) this.pass2(ast.b);

    if (ast.a?.op === "imm" && ast.b?.op === "imm") {
      switch (ast.op) {
        case "+":
          ast.n = ast.a.n + ast.b.n;
          break;
        case "-":
          ast.n = ast.a.n - ast.b.n;
          break;
        case "*":
          ast.n = ast.a.n * ast.b.n;
          break;
        case "/":
          ast.n = ast.a.n / ast.b.n;
          break;
      }

      ast.op = "imm";
      delete ast.a;
      delete ast.b;
    }

    return ast;
  }

  pass3(ast) {
    const asm = [];

    if (ast.a) {
      asm.push(this.pass3(ast.a));
      asm.push("PU");
    }
    if (ast.b) {
      asm.push(this.pass3(ast.b));
      asm.push("SW", "PO");
    }

    if (ast.op === "arg") {
      asm.push(`AR ${ast.n}`);
    } else if (ast.op === "imm") {
      asm.push(`IM ${ast.n}`);
    } else if (ast.op === "+") {
      asm.push("AD");
    } else if (ast.op === "-") {
      asm.push("SU");
    } else if (ast.op === "*") {
      asm.push("MU");
    } else if (ast.op === "/") {
      asm.push("DI");
    }

    return asm.flat(Infinity);
  }

  #expression() {
    return this.#term();
  }

  #term() {
    let expr = this.#factor();

    while (
      this.#tokens[this.#currIdx] === "+" ||
      this.#tokens[this.#currIdx] === "-"
    ) {
      const op = this.#tokens[this.#currIdx++];
      const right = this.#factor();
      expr = { op, a: expr, b: right };
    }

    return expr;
  }

  #factor() {
    let expr = this.#primary();

    while (
      this.#tokens[this.#currIdx] === "*" ||
      this.#tokens[this.#currIdx] === "/"
    ) {
      const op = this.#tokens[this.#currIdx++];
      const right = this.#primary();
      expr = { op, a: expr, b: right };
    }

    return expr;
  }

  #primary() {
    if (typeof this.#tokens[this.#currIdx] === "number") {
      return { op: "imm", n: this.#tokens[this.#currIdx++] };
    }

    if (this.#tokens[this.#currIdx] !== "(") {
      return { op: "arg", n: this.#args.get(this.#tokens[this.#currIdx++]) };
    }

    this.#currIdx++; // Consume '('
    const parensExpr = this.#expression();
    this.#currIdx++; // Consume ')'

    return parensExpr;
  }
}