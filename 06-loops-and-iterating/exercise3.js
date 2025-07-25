let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The loop never stops because counter = 1 resets it every time.
// counter += 1 becomes 2, so counter > 2 is false and break never triggers.