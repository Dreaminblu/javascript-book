let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let lengths =  arr.map(str => str.length);
  let oddLengths = lengths.filter(num => num % 2 === 1);
  return oddLengths;
}


console.log(oddLengths(arr));
