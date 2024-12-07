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

// //TODO:=========task-05=================
// // Знайдіть перше непарне число

// const numbers = [2, 2, 6, 8, 9, 10, 12];

// const findElement = (array) => array.find((el) => el % 2 !== 0);

// console.log(findElement(numbers));

// //TODO:=========task-06=================
// // Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbers = [4, 2, 5, 1, 3];

// const sortedArray = (array) => array.toSorted((a, b) => b - a);
// console.log(sortedArray(numbers));

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const sortedArray = (array) => array.toSorted((a, b) => b.localeCompare(a));

// console.log(sortedArray(stringArray));

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const filterUsers = (arr) => arr.filter((el) => el.age > 20);

// console.log(filterUsers(user));

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = (arr) => arr.reduce((acc, el) => (acc += el), 0);

// console.log(sum(numbers));

//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

// class Client {
//   #login;
//   #email;

//   static Priority() {
//     return {
//       Higth: "Hight",
//       Low: "Low",
//     };
//   }

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getLogin() {
//     return this.#login;
//   }

//   set changeLogin(newLogin) {
//     this.#login = newLogin;
//   }

//   get getEmail() {
//     return this.#email;
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("mango", "mango@gmail.com");

// // console.log(client.getLogin);

// // client.changeLogin = "mango123";

// // console.log(client.getLogin);

// // console.log(client.getEmail);

// console.log(client);
// console.log(Client.Priority().Higth);

//! Практика наслідування у класах.
//TODO:=========task-04=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/

// class Person {
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.gender = params.gender;
//     this.email = params.email;
//   }
// }

// const person = new Person({
//   name: "Bob",
//   age: 27,
//   gender: "male",
//   email: "bob@gmail.com",
// });

// console.log(person);

// class Person {
//   constructor(userName, age, gender, email) {
//     this.userName = userName;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       userName: this.userName,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// const person = new Person("Bob", 27, "male", "bob@gmail.com");

// console.log(person);

// console.log(person.getDetails());

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/

// class Employee extends Person {
//   constructor(salary, department, userName, age, gender, email) {
//     super(userName, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
// }

// const employee = new Employee(5000, "IT", "Jon", 35, "male", "jon@gmail.com");

// console.log(employee);
// console.log(employee.getDetails());
