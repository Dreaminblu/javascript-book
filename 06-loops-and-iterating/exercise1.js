let rlSync = require('readline-sync');
let age = rlSync.question('How old are you? ');
age = parseInt(age);

console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10}.`);
// console.log(`In 20 years, you will be ${age + 20}.`);
// console.log(`In 30 years, you will be ${age + 30}.`);
// console.log(`In 40 years, you will be ${age + 40}.`);

for(let i = 1; i <= 4; i++) {
  console.log(`In ${i * 10} years, you will be ${age + (i * 10)}.`);
}

