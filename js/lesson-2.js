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
//

// /TODO:=========task-3=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

const wordsArray = ["JavaScript", "HTML", "CSS", "React"];
const substring = "s";
const substring1 = "h";

// function findSubstring(arr, item) {
//   const newArray = [];
//   for (const word of arr) {
//     if (word.toLowerCase().indexOf(item.toLowerCase()) !== -1) {
//       newArray.push(word);
//     }
//   }
//   return `Масив елементів, що містять підстроку ${item}: ${newArray.join(
//     ", "
//   )}`;
// }
// console.log(findSubstring(wordsArray, substring));

function findSubstring(arr, item) {
  const newArray = [];
  for (const word of arr) {
    if (word.toLowerCase().includes(item.toLowerCase())) {
      newArray.push(word);
    }
  }
  return `Масив елементів, що містять підстроку ${item}: ${newArray.join(
    ", "
  )}`;
}
console.log(findSubstring(wordsArray, substring));
console.log(findSubstring(wordsArray, substring1));
