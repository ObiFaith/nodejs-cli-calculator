# Node.js CLI Calculator

Welcome to the Node.js CLI Calculator – a simple, interactive command-line tool that performs basic arithmetic operations directly in your terminal.

## 🧮 Overview

This project is a Node.js-based calculator designed to run in a terminal environment. It allows users to perform common arithmetic operations such as addition, subtraction, multiplication, division, and exponentiation, all through a user-friendly command-line interface.

## ✨ Features

- Add two numbers

- Subtract one number from another
- Multiply two numbers
- Divide one number by another
- Raise one number to the power of another
- Exit the program gracefully

## 🚀 Getting Started

### Prerequisites

Node.js installed on your machine

### Clone the Repository

```bash
git clone https://github.com/your-username/nodejs-cli-calculator.git
cd nodejs-cli-calculator
```

### Run the Calculator

```bash
node calculator.js
```

You’ll see a prompt like this:

```markdown
Welcome to Node.js Calculator!
Select operation:

1. Add
2. Subtract
3. Multiply
4. Divide
5. Power
6. Exit

Enter choice (1 - 6):
```

Follow the instructions to input your choice and the operands. The result will be printed directly in your terminal.

## 🔧 Calculator Functions

Here are the arithmetic operations used:

```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => a ** b;
```

## 🛠 How It Works

- Prompts the user to select an operation.

- Accepts two numeric inputs (operands).
- Performs the selected arithmetic operation.
- Displays the result.
- Repeats until the user chooses to exit.

## 📁 Project Structure

```bash
nodejs-cli-calculator/
│
├── calculator.js   # Main entry point of the calculator app
└── README.md       # Project documentation
```

## 📄 License

This project is open source and available under the MIT License.
