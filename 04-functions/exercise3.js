function multiply(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let firstNumber = multiply('Enter the first number: ');
let secondNumber = multiply('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);