const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// It logs 'bar' because the other FOO is only inside the block.