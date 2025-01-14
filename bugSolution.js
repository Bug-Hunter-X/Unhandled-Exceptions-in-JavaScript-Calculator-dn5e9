function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(a, b, operator) {
  try {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        throw new Error('Invalid operator');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null; // or handle the error in a more appropriate way
  }
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2
console.log(calculate(10, 0, '/')); // Error: Cannot divide by zero
console.log(calculate(10, 5, '%')); // Error: Invalid operator