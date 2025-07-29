let array1 = [1, 2, 3];
let array2 = array1;

array1[1] = 4;
console.log(array2);

// This code will log 1, 4, 3 because both variables array1 and array2 point to the same array in memory.