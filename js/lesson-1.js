// const number = 10;
// console.log(number);
// // ! Warning !
// // ? Question
// // * Alright
// // Todo
// const name = "Andrii";
// console.log(`Hello ${name}`);

//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "abcde";
// // if (str.startsWith("a")) {
// //   console.log("yes");
// // } else {
// //   console.log("no");
// // }
// str[0] === "a" ? console.log("yes") : console.log("no");

//TODO: 2===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.
// const age = 101;

// if (age > 0 && age <= 16) {
//   console.log("children");
// } else if (age > 16 && age <= 60) {
//   console.log("adult");
// } else if (age > 60 && age <= 100) {
//   console.log("old");
// } else {
//   console.log("eror");
// }

//TODO: 3 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt("Який напій бажаєте?").toLowerCase();

// function orderDrink(neme) {
//   let price = 0;
//   switch (neme) {
//     case "кава":
//       price = 60;
//       break;
//     case "чай":
//       price = 30;
//       break;
//     case "сік":
//       price = 40;
//       break;

//     default:
//       return alert("eror");
//   }
//   return alert(`сума вашого замовлення ${price} grn`);
// }

// orderDrink(drink);

//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****
// let star = '*';
// for (let i = 0; i < 7; i++) {
//   console.log(star);
//   star += '*';
// }
