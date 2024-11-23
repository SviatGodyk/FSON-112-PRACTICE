// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// // styles.pop();

// styles.unshift("Реп", "Реггі");
// // const newData = ["Реп", "Реггі"];
// // const newStyles = newData.concat(styles);
// styles.unshift("Реп");

// const index = styles.indexOf("Блюз");
// console.log(index);
// if (index !== -1) {
//   styles[index] = "Класика";
// }

// console.log(styles);
// // console.log(newStyles);

// for (let i = 0; i < styles.length; i++) {
//   console.log(`${i + 1} - ${styles[i]}`);
// }

// for (const style of styles) {
//   console.log(style);
// }

//TODO:=========task-2=================
// Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі.

// const message = "JavaScript is a popular programming language.";

// // console.log(message.split(" ").length);

// // function sluggy(str) {
// //   return str.toLowerCase().split(" ").join("-");
// // }

// console.log(sluggy(message));

// function sluggy(str) {
//   return str.toLowerCase().replaceAll(" ", "-");
// }
