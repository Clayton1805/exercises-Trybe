    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((total,book) => {
    // return total + book.split('').reduce((total2,book2) => {
    // //   console.log(book2);   
    //   if (book2.toUpperCase() === 'X') {
    //     return total2 + 1;
    //   } else {
    //     return total2;
    //   }
    // }, 0);
    
    // método mais simples
    return total + book.toUpperCase().split('A').length - 1;
  }, 0)
}
console.log(containsA());

assert.deepEqual(containsA(), 20);