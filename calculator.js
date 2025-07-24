// import readline from 'readline';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  try {
    return a / b;
  } catch (error) {
    return error.message;
  }
};

console.log('Welcome to Node.js Calculator!');

const rl = readline.createInterface({ input, output });
const options = ['Add', 'Subtract', 'Multiply', 'Divide', 'Exit'];
const operation = `Select operation:\n${options
  .map((option, index) => `${index + 1}. ${option}\n`)
  .join('')}Enter choice (1-5): `;

let operator, firstOperand, secondOperand;

// Get operator
do {
  operator = Number(await rl.question(operation));
  if (Number.isNaN(operator) || operator < 1 || operator > options.length) {
    console.log('\nPlease pick a number within the range of 1 - 5');
  }
} while (Number.isNaN(operator) || operator < 1 || operator > options.length);

if (operator === 5) {
  console.log('End of Node.js Calculator!');
} else {
  // Get firstOperand
  do {
    firstOperand = Number(await rl.question('First Operand: '));
    if (Number.isNaN(firstOperand)) {
      console.log('\nPlease enter a valid number');
    }
  } while (Number.isNaN(firstOperand) || !Number.isFinite(firstOperand));

  // Get secondOperand
  do {
    secondOperand = Number(await rl.question('Second Operand: '));
    if (Number.isNaN(secondOperand)) {
      console.log('\nPlease enter a valid number');
    }
  } while (Number.isNaN(secondOperand) || Number.isFinite(secondOperand));

  console.log(operator, firstOperand, secondOperand);
}

/* let result;

switch (operator) {
  case '+':
    result = add(firstOperand, secondOperand);
    break;
  case '-':
    result = subtract(firstOperand, secondOperand);
    break;
  case '*':
    result = multiply(firstOperand, secondOperand);
    break;
  case '/':
    result = divide(firstOperand, secondOperand);
    break;
  default:
    console.log('Invalid Operator');
    break;
}

if (result) {
  console.log('Result:', result);
} */
rl.close();
