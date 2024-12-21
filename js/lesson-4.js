//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer ) та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");

const createBoxes = (amount) => {
  const divContainer = document.createElement("div");
  divContainer.classList.add("number-container");

  // const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.classList.add("number");
    div.textContent = randomNumber();
    div.textContent % 2 === 0
      ? div.classList.add("even")
      : div.classList.add("odd");
    divContainer.appendChild(div);
  }
  buttonElement.after(divContainer);
};

buttonElement.addEventListener("click", () => {
  const divContainer = document.querySelector(".number-container");
  if (divContainer) {
    divContainer.remove();
  }
  const amount = inputElement.value;
  createBoxes(amount);
});
