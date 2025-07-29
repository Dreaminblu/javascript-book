function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Variables => hello, greeting, name, xyzzy, howdy, foo
// Objects => hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}
// Property Names => a, b, c, d, 0, 1, 2
// Primitive values => '', a, 1, b, 2, c, 3, 4, 5, d, Hi, Grace, 0, 1, 2
