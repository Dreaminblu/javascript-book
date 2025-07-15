let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// It will log 'bar' because the foo inside the block is scoped only to that block and is not accessible outside it.