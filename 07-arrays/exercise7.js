let array = [3, 5, 7];

function sumOfSquares(arr){
  let result = arr.reduce((acc, curr) => acc + curr * curr, 0);
  return result;
}


console.log(sumOfSquares(array));