let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// use the .reduce method
// convert each string in the array to number (str.length)
// figure out which numbers are odd
// return oddlengths only

function oddLengths(arr) {
  return arr.reduce((acc, curr) => {
    let length = curr.length;
    if (length % 2 === 1) {
      acc.push(length);
    }
    return acc;
  }, []);
}

console.log(oddLengths(arr));