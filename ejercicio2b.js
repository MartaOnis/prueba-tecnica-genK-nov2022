'use strict';

const array1 = [
  [1, 3, 5],
  [7, 9, 7],
  [5, 3, 1],
];

const array2 = [
  [2, 4, 6],
  [8, 10, 8],
  [6, 4, 2],
];
let result = [];
function multiplyArray(array1, array2) {
  const rowsArray1 = array1.length;
  const columnsArray1 = array1[0].length;
  const rowsArray2 = array2.length;
  const columnsArray2 = array2[0].length;

  const n = result.length;

  const first =
    array1[0][0] * array2[0][0] +
    array1[0][1] * array2[1][0] +
    array1[0][2] * array2[2][0];
  const second =
    array1[0][0] * array2[0][1] +
    array1[0][1] * array2[1][1] +
    array1[0][2] * array2[2][1];
  const third =
    array1[0][0] * array2[0][2] +
    array1[0][1] * array2[1][2] +
    array1[0][2] * array2[2][2];
  const fourth =
    array1[1][0] * array2[0][0] +
    array1[1][1] * array2[1][0] +
    array1[1][2] * array2[2][0];
  const fifth =
    array1[1][0] * array2[0][1] +
    array1[1][1] * array2[1][1] +
    array1[1][2] * array2[2][1];
  const sixth =
    array1[1][0] * array2[0][2] +
    array1[1][1] * array2[1][2] +
    array1[1][2] * array2[2][2];
  const seventh =
    array1[2][0] * array2[0][0] +
    array1[2][1] * array2[1][0] +
    array1[2][2] * array2[2][0];
  const eighth =
    array1[2][0] * array2[0][1] +
    array1[2][1] * array2[1][1] +
    array1[2][2] * array2[2][1];
  const nineth =
    array1[2][0] * array2[0][2] +
    array1[2][1] * array2[1][2] +
    array1[2][2] * array2[2][2];

  result = [
    [first, second, third],
    [fourth, fifth, sixth],
    [seventh, eighth, nineth],
  ];

  return result;
}

multiplyArray(array1, array2);

/// FUNCIÓN QUE SOLUCIONA EL EJERCICIO.LO ANTERIOR ERA PARA OBTENER EL ARRAY RESULT DEL APARTADO ANTERIOR

function getStrings(array) {
  const string = array.toString().split(',');

  for (let i = 0; i < string.length; i++) {
    if (string[i].length < 3) {
      string[i] = string[i].padStart(3, '0');
    }
  }
  return string;
}

getStrings(result);
console.log(getStrings(result));
