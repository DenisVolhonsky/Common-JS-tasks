document.getElementById("app").innerHTML = `
<h1>Common tasks</h1>
`;

const array = [2, 5, 6, -7, 12, 12, 15, 2, 5, 0, 3, -8, 9];
const arr1 = [12, 12, 15, 2, 5];
const arr2 = [6, -7, 12, 12, 15, 2];

// Получение максимального элемента массива
function getMaxValue(array) {
  let max = array[0]; // 2
  for (var i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
console.log("First max_1:", getMaxValue(array)); // 15

// Второй способ получения макс. ел массива
const secondMax = Math.max.apply(null, array);
console.log("Second max_2:", secondMax); // 15

// Убрать дубликаты 1
const removeDublicates_1 = [...new Set(array)];
console.log("Remove dublicates_1:", removeDublicates_1); // [2, 5, 6, -7, 12, 15, 0, 3, -8, 9]

// Убрать дубликаты 2
const removeDublicates_2 = array.filter(
  (item, idx) => array.indexOf(item) === idx
);
console.log("Remove dublicates_2:", removeDublicates_2); // [2, 5, 6, -7, 12, 15, 0, 3, -8, 9]

// Отсортировать по возрастанию
const arrSort = array.sort((a, b) => a - b);
console.log("Array sort:", arrSort); // [-8, -7, 0, 2, 2, 3, 5, 5, 6, 9, 12, 12, 15]

// Array Reverse
const newRev = array.reverse();
console.log("Reverse_1:", newRev); // [15, 12, 12, 9, 6, 5, 5, 3, 2, 2, 0, -7, -8]

const newArr = [];
array.forEach((item) => {
  newArr.unshift(item);
});
console.log("Reverse_2:", newArr); // [15, 12, 12, 9, 6, 5, 5, 3, 2, 2, 0, -7, -8]

// Получение всех вхождений в строке
const str = "Привет мир!";
const double1 = (arg) => [...arg].filter((item) => item === "р");
console.log("Поиск вхождений p в строке 1:", double1(str)); // ["р", "р"]

// проверка на 2x вхождений arr1 и arr2
const arr3 = arr1.filter((item) => arr2.indexOf(item) >= 0);
console.log("Поиск вхождений в строке 2:", arr3);

// Более сложный пример проверки на 2x вхождения
const arr5 = [1, 2, "a", 3, 1, "a", 2];
let obj = {};
// const arr = [1, 2, 'a', 3, 1, 'a', 2] => {1: 2, 2: 2, 3: 1, a: 2}
arr5.map((item) =>
  !obj[item] ? (obj[item] = 1) : (obj[item] = obj[item] + 1)
);
console.log("[1, 2, 'a', 3, 1, 'a', 2] => ", obj);

// рекурсия - возведение в степень
function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log("2 pow 3 =", pow(2, 3)); // 8

// // Расшифровка шагов выполнения:
// // 1) x = 2, pow(2, 3) => 8
// // 2) x = 2, pow(2, 2) => 4
// // 3) x = 2, pow(2, 1) => 2
// // 4) результат 8
