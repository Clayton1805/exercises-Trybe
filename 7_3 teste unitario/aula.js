// const assert = require('assert');

// assert.equal(50, 50); // OK
// assert.equal(50, 70); // AssertionError: 50 == 70

// ---------------------------------------------------------

// const assert = require('assert');

// function add(a, b) {
//   return a + b;
// }

// const expected = add(1, 2);

// assert(expected === 3, 'one plus two is three');
// assert.ok(expected === 3, 'one plus two is three');
// assert.equal(expected, 3, 'one plus two is three');
// assert.notEqual(expected, 10, 'one plus two is three (NOT Four!)');

// ---------------------------------------------------------

// const assert = require('assert');

// const list1 = [1, 2, 3, 4, 5];
// const list2 = [1, 2, 3, 4, 5];

// assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

// const person1 = { name: 'john', age: 21 };
// const person2 = { name: 'john', age: 21 };

// assert.deepEqual(person1, person2, 'these two objects are the same');

// const person3 = { name: 'john', age: 19 };

// assert.notDeepEqual(person1, person3, 'these two objects are different');

// ---------------------------------------------------------

function division(x, y) {
  return x / y;
}

const assert = require('assert');

declaração da função division, definida anteriormente...

assert.equal(division(10, 2), 5); // OK
assert.equal(division(10, 0), 0); // 💣

// ---------------------------------------------------------

// const assert = require('assert');

// function division(x, y) {
//   if (y === 0) throw new Error('parameter y must not be 0');
//   return x / y;
// }


// assert.equal(division(10, 2), 5); // OK
// assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK
// console.log(division(10, 0));
