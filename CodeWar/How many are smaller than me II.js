const assert = require('assert');

function smaller(arr) {
  //code me
  let contador = {};
  for (let i = 0; i < arr.length; i++) {
    if (contador[arr[i]] == undefined) {
      contador[arr[i]] = { quant: 1 };
    } else {
      contador[arr[i]].quant++;
    }
  }
  Object.keys(contador).sort((a, b) => {
    b - a;
  });
  let saida = [];
  arr.forEach((element) => {
    let index = [];
    index = Object.keys(contador).map((el) => parseInt(el));
    index.sort((a, b) => a - b);
    let where = index.indexOf(element) - 1;
    let acc = 0;
    for (let i = where; i >= 0; i--) {
      acc += contador[index[i]].quant;
    }
    saida.push(acc);
    contador[index[where + 1]].quant--;
    if (contador[index[where + 1]].quant == 0)
      delete contador[index[where + 1]];
  });
  //arr.reduce((a,b,arr)=>)
  return saida;
}

assert.deepEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
assert.deepEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
assert.deepEqual(smaller([1, 2, 3]), [0, 0, 0]);
assert.deepEqual(smaller([1, 2, 0]), [1, 1, 0]);
assert.deepEqual(smaller([1, 2, 1]), [0, 1, 0]);

assert.deepEqual(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
assert.deepEqual(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [
  4,
  1,
  5,
  5,
  0,
  0,
  0,
  0,
  0,
]);
