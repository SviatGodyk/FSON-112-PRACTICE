import { addDataToLocalstorage } from "./localstorage-api.js";

// console.log(addDataToLocalstorage);

//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {

//   return "hello world";
// }

// function greet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("hello world");
//     }, 2000);
//   });
// }
// greet()
//   .then((res) => console.log("then", res))
//   .catch((error) => console.log("catch", error));
// console.log(greet());

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);

//TODO:====================02==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

// const value = prompt("Введіть значеня");

// const checkValue = (value) => {
//   return new Promise((res, rej) => {
//     if (!value || isNaN(value)) {
//       return rej("error");
//     } else if (value % 2 === 0) {
//       return setTimeout(() => {
//         res("even");
//       }, 1000);
//     } else {
//       setTimeout(() => {
//         res("odd");
//       }, 2000);
//     }
//   });
// };

// checkValue(value)
//   .then((responce) => console.log(responce))
//   .catch((error) => console.log(error));
