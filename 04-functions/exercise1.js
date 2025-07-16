let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// The output is 1 because the bar inside foo() is local and doesn't affect the outer bar.