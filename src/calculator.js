class calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    const sum = this.a + this.b;

    return sum;
  }
  subtract() {
    const diff = this.a - this.b;

    return diff;
  }
  multiply() {
    const multiplication = this.a * this.b;

    return multiplication;
  }
  divide() {
    const division = this.a / this.b;

    return division;
  }
}

module.exports = calculator;
