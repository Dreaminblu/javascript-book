function multiply(left, right) {
  // multiply(global), left(local), right(local)
  let product = left * right;
  // product(local), left(local), right(local)
  return product;
  // product(local)
}

function getNumber(prompt) {
  // getNumber(global), prompt(local)
  return parseFloat(question(prompt));
  // parseFloat(global), question(global), prompt(local)
}

let left = getNumber('Enter the first number: ');
// getNumber(global), left(global)
let right = getNumber('Enter the second number: ');
// getNumber(global), right(global)
console.log(`${left} * ${right} = ${multiply(left, right)}`);
// console(global), multiply(global) ,left(global), right(global)