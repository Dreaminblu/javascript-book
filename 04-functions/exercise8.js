function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// The code will print 42 and 3.1415. The third argument 2.718 will be ignored because the function foo only expects two parameters.