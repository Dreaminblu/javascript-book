function multiply(left, right) {
  // multiply, left, right
  let product = left * right;
  // product, left, right
  return product;
  // product
}

function getNumber(prompt) {
  // getNumber, prompt
  return parseFloat(question(prompt));
  // parseFloat, question, prompt
}

let left = getNumber('Enter the first number: ');
// getNumber, left
let right = getNumber('Enter the second number: ');
// getNumber, right
console.log(`${left} * ${right} = ${multiply(left, right)}`);
// console, multiply ,left, right