let number = 4936;

let thousandsPlace = Math.trunc(number / 1000);
console.log(thousandsPlace);

let hunredsPlace = Math.trunc((number % 1000) / 100);
console.log(hunredsPlace);

let tensPlace = Math.trunc((number % 100) / 10);
console.log(tensPlace);

let onesPlace = number % 10;
console.log(onesPlace);

// String
 const numberStr = number.toString();

 for (let i = 0; i < numberStr.length; i++) {
  console.log(parseInt(numberStr[i]));
 }

 // While loop (reverse)
 while(number > 0) {
  moduloNum = number % 10;
  console.log(moduloNum);
  number = Math.trunc(number /10);
  if (number === 0) {
    break;
  }
}

 // While loop (reverse)
let reversed = 0;

while(number > 0) {
  let moduloNum = number % 10;
  reversed = reversed * 10 + moduloNum;
  number = Math.trunc(number / 10);
}

console.log(reversed);
