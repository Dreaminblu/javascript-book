let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  let int = arr.filter(int => Number.isInteger(int))
  return int;
}

let integers = findIntegers(things);

console.log(integers);