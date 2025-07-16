function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

// The code will print 'Hello' and then undefined, because we are not passing the second argument qux to the function foo.