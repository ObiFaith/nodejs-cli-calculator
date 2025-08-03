import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const add = (a, b) => a + b;
const divide = (a, b) => a / b;
const power = (a, b) => a ** b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// Declare variables
let option, firstOperand, secondOperand;
const rl = readline.createInterface({ input, output });

const getValidOperand = async (question) => {
  let input;

  while (true) {
    input = await rl.question(question);
    const trimmed = input.trim();
    const number = Number(trimmed);

    if (trimmed.length === 0 || Number.isNaN(number)) {
      console.log('\nPlease enter a valid number');
    } else {
      return number;
    }
  }
};

const getResult = async (option) => {
  const operationFn = [add, subtract, multiply, divide, power][option - 1];
  return operationFn(firstOperand, secondOperand);
};

const operations = ['Add', 'Subtract', 'Multiply', 'Divide', 'Power', 'Exit'];

const operationLen = operations.length;
const optionQues = `Select operation:\n${operations
  .map((option, index) => `${index + 1}. ${option}\n`)
  .join('')}\nEnter choice (1 - ${operationLen}): `;

// Start CLI Calculator
console.log('Welcome to Node.js Calculator!');

// Get option
while (true) {
  option = Number(await rl.question(optionQues));

  if (Number.isNaN(option) || option < 1 || option > operationLen) {
    console.log(
      `\nPlease pick a number within the range of 1 - ${operationLen}`
    );
  } else {
    break;
  }
}

if (option === operationLen) {
  console.log('End of Node.js Calculator!');
} else {
  // Get firstOperand
  firstOperand = await getValidOperand('First Operand: ');
  // Get secondOperand
  secondOperand = await getValidOperand('Second Operand: ');
  // Get Result (perform operation)
  const result = await getResult(option);
  console.log('\nResult:', result);
}

rl.close();
