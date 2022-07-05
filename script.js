const result = document.querySelector('.result');
const display = document.querySelector('.display');
const displayButtons = document.querySelectorAll('.display-buttons');
const numberButtons = document.querySelectorAll('.number-buttons');
const operatorButtons = document.querySelectorAll('.operator-buttons');
const equalButton = document.getElementById('equal-button');
const clearButton = document.getElementById('clear-button');
const decimalButton = document.getElementById('decimal-button');

let calcResult = '';
let num1 = '';
let num2 = '';
let operator = '';
let displayValue = '';

displayButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    DisplayOperation(e.target.innerText);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (operator) {
      StoreNumbers();
      Calculate(operator, num1, num2);
    }

    StoreOperator(e.target.innerText);
  });
});

equalButton.addEventListener('click', () => {
  StoreNumbers();
  Calculate(operator, num1, num2);
  DisplayValue();
});

clearButton.addEventListener('click', () => {
  ClearData();
});

decimalButton.addEventListener('click', () => {
  AddDecimal();
  DisplayValue();
});

function DisplayValue() {
  if (displayValue === Infinity) {
    ClearData();
    alert("Can't divide by 0");
  }
  display.textContent = displayValue;
}

function DisplayOperation(num) {
  displayValue += num;
  DisplayValue();
}

function StoreNumbers() {
  const splitDisplay = displayValue.split(operator);
  num1 = splitDisplay[0];
  num2 = splitDisplay[1];
}

function StoreOperator(buttonText) {
  operator = buttonText;
}

function ClearData() {
  num1 = '';
  num2 = '';
  operator = '';
  displayValue = '';
  display.textContent = '';
}

function AddDecimal() {
  if (displayValue.includes('.')) return;
  displayValue += '.';
}

function Calculate(operator, num1, num2) {
  switch (operator) {
    case '/':
      displayValue = Divide(num1, num2);
      break;

    case '*':
      displayValue = Multiply(num1, num2);
      break;

    case '-':
      displayValue = Subtract(num1, num2);
      break;

    case '+':
      displayValue = Add(num1, num2);
      break;

    default:
      break;
  }
}

function Divide(num1, num2) {
  return +num1 / +num2;
}

function Multiply(num1, num2) {
  return +num1 * +num2;
}

function Subtract(num1, num2) {
  return +num1 - +num2;
}

function Add(num1, num2) {
  return +num1 + +num2;
}
