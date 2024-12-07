//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// console.log(powArray(numbers));

// function powArray(arr) {
//   const newArray = [];

//   for (const number of arr) {
//     newArray.push(Math.pow(number, 2));
//   }
//   return newArray;
// }

// const numbers = [1, 2, 3, 4, 5];

// const powArray = (arr) => arr.map((num) => Math.pow(num, 2));

// console.log(powArray(numbers));

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const numbers = (param) => param.flatMap((el) => el.values);

// console.log(numbers(data));

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const people1 = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 22 },
// ];
// const checkAge = (arr) => arr.some(item => item.age < 20);
// console.log(checkAge(people));
// console.log(checkAge(people1));
// const getData = (arr) => {
//   return arr.map((el, idx) => {
//     console.log(`${idx + 1} - ${el.name}`);
//   });
// };
// getData(people);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const numbers1 = [2, 4, 5, 8, 10];
// const checkEvenNumbersArray = (arr) => arr.every((el) => el % 2 === 0);
// console.log(checkEvenNumbersArray(numbers));
// console.log(checkEvenNumbersArray(numbers1));
