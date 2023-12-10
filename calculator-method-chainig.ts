class Calculator {
  root = 0;
  constructor(value: number) {
    this.root = value;
  }

  add(value: number): Calculator {
    return new Calculator(this.root + value);
  }

  subtract(value: number): Calculator {
    return new Calculator(this.root - value);
  }

  multiply(value: number): Calculator {
    return new Calculator(this.root * value);
  }

  divide(value: number): Calculator {
    const result = new Calculator(this.root / value);
    if (isNaN(result.getResult())) {
      throw new Error("Division by zero is not allowed");
    }

    return result;
  }

  power(value: number): Calculator {
    return new Calculator(this.root ** value);
  }

  getResult(): number {
    return this.root;
  }
}
