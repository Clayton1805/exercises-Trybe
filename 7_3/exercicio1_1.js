const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);

// ------------------------------------------
// const assert = require('assert');

function myRemove(arr, item) {
//   let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      arr.push(arr[i]);
    }
  }
  return arr;
}
// implemente seus testes aqui
assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
let array = [1, 2, 3, 4];
myRemove(array, 3);
assert.deepEqual(array, [1, 2, 3, 4]);

