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
// console.log(findSubstring(wordsArray, substring));
// console.log(findSubstring(wordsArray, substring1));

// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const human = {
//   userName: "Боб",
//   hobby: "футбол",
//   age: 25,

//   greet() {
//     console.log(`Hello ${this.userName}`);
//   },
// };

// console.log(human["userName"]);
// console.log(human.hobby);
// console.log(human.age);
// console.log(human.greet());
// const human1 = Object.create(human);
// console.log(human1);
// human.mood = "happy";
// human.hobby = "skydiving";
// // console.log(human);
// for (const key in human1) {
//   if (human1.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(human[key]);
//   }
// }

const sallarys = {
  Bob: 1500,
  Mango: 1700,
  Ajax: 1900,
};

// function totalSallarys(obj) {
//   let totalSum = 0;
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       totalSum += obj[key];
//     }
//   }

//   return totalSum;
// }

// console.log(totalSallarys(sallarys));

function totalSallarys(obj) {
  let totalSum = 0;
  for (const sum of Object.values(obj)) {
    totalSum += sum;
  }

  return totalSum;
}

//console.log(totalSallarys(sallarys));



//TODO:============task-2==============================================
// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
    ownerName: 'Kateryna',
    accountNumber: 1234,
    balance: 0,

    deposit(sum) {
        this.balance += sum;
        return this.balance;
    },

withdraw(sum) {
    this.balance -= sum;
    return `знято ${sum}, Ваш баланс складає ${this.balance}`;
}

}

bankAccount.deposit(10000);


console.log(bankAccount.withdraw(5000));