let objToCopy = {
  foo: 1,
  bar: 2,
  qux:3,
};

function copyObj (obj, keys) {
  let result = {};

  if (keys) {
    keys.forEach(function(key) {
      result[key] = obj[key];
    });
    
    return result;
  } else {
    Object.assign(result, obj);
  }
}


let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);

console.log(objToCopy);