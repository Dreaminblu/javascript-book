let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, pattern) {
  let matches = []
  for (let i = 0; i < words.length; i++) {
    if (pattern.test(words[i])) {
      matches.push(words[i]);
    }
  }
  return matches;
}

function allMatches1(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

console.log(allMatches(words, /lab/)); 
