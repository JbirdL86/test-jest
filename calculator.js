class Calculator {

  add(a, b) {
    return a + b;
  }

  substract(a, b) {
    if(b > a){
      return "First parameter is smaller than second";
    }
    
    return a - b;
  }

  multiply(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return "Value is not an integer"
    }

    return a * b;
  }

  divide(a, b) {
    if (b === 0){
      return "Imposible to divide by zero";
    }

    if(a === 0){
      return "Zero is not divisible";
    }

    return a / b;
  }

}

module.exports = Calculator;
