const TOKEN_TYPE = {
  PLUS: "PLUS",
  MINUS: "MINUS",
  STAR: "STAR",
  SLASH: "SLASH",
  LEFT_PAREN: "LEFT_PAREN",
  RIGHT_PAREN: "RIGHT_PAREN",
  NUMBER: "NUMBER",
};

const EXPR_TYPE = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
  NEGATE: "NEGATE",
  LITERAL: "LITERAL",
};

function tokenize(expression) {
  const tokens = [];
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    const ch = expression[i];

    if ((ch >= "0" && ch <= "9") || ch === ".") {
      currentNumber += ch;

      if (i === expression.length - 1) {
        tokens.push({ type: TOKEN_TYPE.NUMBER, value: Number(currentNumber) });
      }
    } else {
      if (currentNumber.length > 0) {
        tokens.push({ type: TOKEN_TYPE.NUMBER, value: Number(currentNumber) });
        currentNumber = "";
      }

      if (ch === "+") {
        tokens.push({ type: TOKEN_TYPE.PLUS });
      } else if (ch === "-") {
        tokens.push({ type: TOKEN_TYPE.MINUS });
      } else if (ch === "*") {
        tokens.push({ type: TOKEN_TYPE.STAR });
      } else if (ch === "/") {
        tokens.push({ type: TOKEN_TYPE.SLASH });
      } else if (ch === "(") {
        tokens.push({ type: TOKEN_TYPE.LEFT_PAREN });
      } else if (ch === ")") {
        tokens.push({ type: TOKEN_TYPE.RIGHT_PAREN });
      }
    }
  }

  return tokens;
}

function parse(tokens) {
  let currIdx = 0;

  function isAtEnd() {
    return currIdx >= tokens.length;
  }

  function expression() {
    return term();
  }

  function term() {
    let expr = factor();
    let type;

    while (
      !isAtEnd() &&
      (tokens[currIdx].type === TOKEN_TYPE.PLUS ||
        tokens[currIdx].type === TOKEN_TYPE.MINUS)
    ) {
      if (tokens[currIdx].type === TOKEN_TYPE.PLUS) {
        type = EXPR_TYPE.ADD;
      } else {
        type = EXPR_TYPE.SUBTRACT;
      }
      currIdx++;

      const right = factor();
      expr = { type, left: expr, right };
    }

    return expr;
  }

  function factor() {
    let expr = negation();
    let type;

    while (
      !isAtEnd() &&
      (tokens[currIdx].type === TOKEN_TYPE.STAR ||
        tokens[currIdx].type === TOKEN_TYPE.SLASH)
    ) {
      if (tokens[currIdx].type === TOKEN_TYPE.STAR) {
        type = EXPR_TYPE.MULTIPLY;
      } else {
        type = EXPR_TYPE.DIVIDE;
      }
      currIdx++;

      const right = negation();
      expr = { type, left: expr, right };
    }

    return expr;
  }

  function negation() {
    if (!isAtEnd() && tokens[currIdx].type === TOKEN_TYPE.MINUS) {
      currIdx++;
      return { type: EXPR_TYPE.NEGATE, right: negation() };
    }

    return literal();
  }

  function literal() {
    if (!isAtEnd() && tokens[currIdx].type === TOKEN_TYPE.NUMBER) {
      const expr = { type: EXPR_TYPE.LITERAL, value: tokens[currIdx].value };
      currIdx++;

      return expr;
    } else if (!isAtEnd() && tokens[currIdx].type === TOKEN_TYPE.LEFT_PAREN) {
      currIdx++;
      const expr = expression();
      currIdx++;
      return expr;
    }

    throw new Error("Expected literal or grouped expression.");
  }

  return expression();
}

function evaluate(ast) {
  switch (ast.type) {
    case EXPR_TYPE.LITERAL:
      return ast.value;
    case EXPR_TYPE.NEGATE:
      return -evaluate(ast.right);
    case EXPR_TYPE.MULTIPLY:
      return evaluate(ast.left) * evaluate(ast.right);
    case EXPR_TYPE.DIVIDE:
      return evaluate(ast.left) / evaluate(ast.right);
    case EXPR_TYPE.ADD:
      return evaluate(ast.left) + evaluate(ast.right);
    case EXPR_TYPE.SUBTRACT:
      return evaluate(ast.left) - evaluate(ast.right);
  }
}

function calc(expression) {
  const tokens = tokenize(expression);
  const ast = parse(tokens);
  console.dir(ast, { depth: null });
  const result = evaluate(ast);

  return result;
}