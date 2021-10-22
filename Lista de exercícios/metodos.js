// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
function addValues(num, val) {
  const newArray = [];
  for (let i = 0; i < num; i++) {
    newArray.push(val);
  }
  return newArray;
}

const result = addValues(3, 'a');

console.log('1) ');
console.log(result);

// /2) Implemente um método que inverta um array,
// não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }
  return output;
}

console.log('2) ');
console.log(reverse([1, 2, 3, 4]));

// 3) Implemente um método que limpe os itens desnecessários de um
// array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
const arraySujo = [1, 2, '', undefined];
const arrayLimpo = arraySujo.filter(function (item) {
  return typeof item === 'number';
});

console.log('3) ');
console.log(arrayLimpo);

// 4) Implemente um método que a partir de um array de arrays,
// converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
const arrayToObj = (arr) =>
  arr.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});

console.log('4) ');
console.log(
  arrayToObj([
    ['c', '1'],
    ['d', '4'],
  ])
);

// 5) Implemente um método que retorne um array,
// sem os itens passados por parâmetro depois do array de entrada.
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
const arr = [5, 4, 3, 2, 5];

const filter = arr.filter((number) => number == 4);
const jonhosm = arr.filter((number) => number == 2);

console.log('5) ');
console.log([filter + '', '' + jonhosm]);

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

const arrayUnico = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3];
const novaArr = arrayUnico.filter(function (number, index) {
  return arrayUnico.indexOf(number) === index;
});

console.log('6) ');
console.log(novaArr);

// 7) Implemente um método que compare a igualdade de dois arrays e
// retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
function compareArrays(a, b) {
  a = [1, 2, 3, 4].toString();
  b = [1, 2, 3, 4].toString();

  return a === b;
}
console.log('7) ');
console.log(compareArrays());

// 8) Implemente um método que remova os aninhamentos de um array de arrays
// para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

const arraysAninhados = [1, 2, [3], [4, 5]];
const unicArray = arraysAninhados.flat(1);

console.log('8) ');
console.log(unicArray);

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function divideArray(arr, number) {
  novoArray = [];
  for (var i = 0; i < arr.length; i = i + number) {
    novoArray.push(arr.slice(i, i + number));
  }
}
var a = [1, 2, 3, 4, 5],
  b = 2;
console.log('9) ');
console.log(divideArray(a), b);

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

var arr1 = [6, 8],
  arr2 = [8, 9];

res = arr1.filter((item) => arr2.includes(item));

console.log('10) ');
console.log(res);
