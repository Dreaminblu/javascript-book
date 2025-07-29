let obj = {
  b: 2,
  a: 1,
  c: 3
};

let capKeys = [];
let objKeys = Object.keys(obj);

objKeys.forEach(key => {
  capKeys.push(key.toUpperCase());
});

console.log(capKeys);

let upperKeys = objKeys.map(key => key.toUpperCase());
console.log(upperKeys);