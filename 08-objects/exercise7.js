let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// The output is not the same.
// Object.keys(myObj) lists only the object’s own properties ('qux'), while for...in loops through both own and inherited properties ('qux', 'foo', 'bar'). 