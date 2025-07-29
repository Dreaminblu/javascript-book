function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// Variables => bar, foo, arg1, arg2, qux, result
// Objects => bar, qux, [1, 2, 3, [4, 5, 6]], [4, 5, 6]
// Property Names => abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3, 0, 1, 2
// Primitive values => Hello, abc, def, ghi, jkl, mno, pqr, 1, 2, 3, 0, 1, 2, 3, 4, 5, 6, null, NaN, Victor, Antonia       
