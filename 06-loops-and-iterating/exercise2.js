// factorial => 1 * 2 * 3 * ..n
// don't know what n value is so better to go down

function factorial(num) {
  let result = 1;
  for(let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}
 
console.log(factorial(1));    
console.log(factorial(2));     
console.log(factorial(3));     
console.log(factorial(4));    
console.log(factorial(5)); 
console.log(factorial(6));     
console.log(factorial(7));
console.log(factorial(8));   
