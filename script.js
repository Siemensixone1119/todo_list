const btnAdd = document.querySelector(".todo__plus");
const input = document.querySelector(".todo__input");

btnAdd.addEventListener("click", onAddTodoElem);


function onAddTodoElem(event) {
  if (input.value.length !== 0) {
    const todoElem = document.createElement("div"); // элемент
    todoElem.classList.add("todo__element");

    const todoNameElem = document.createElement("p"); // название задачи
    todoNameElem.classList.add("todo__name");
    todoNameElem.textContent = input.value;

    const btnContain = document.createElement("div"); // контейнер для кнопок
    btnContain.classList.add("todo__btn");

    const btnExecute = document.createElement("button"); // кнопка добавления задачи
    btnExecute.classList.add("todo__execute");

    const btnDelete = document.createElement("button"); // кнопка удаления задачи
    btnDelete.classList.add("todo__delete");

    todoElem.append(todoNameElem, btnContain); // добавляем содержимое элемента

    btnContain.append(btnExecute, btnDelete); // добавляем кнопки в контейнер

    const todoContain = document.querySelector(".todo__contain"); //   добавляем элемент
    todoContain.append(todoElem);

    input.value = "";

    btnDelete.addEventListener("click", () => onDeleteElem(todoElem));
    btnExecute.addEventListener("click", () => onCompleteElement(todoElem, btnContain, todoNameElem));

    todoIncrement();
  } else {
    alert("Пожалуйста, введите текст");
  }
}

function onDeleteElem(todoElem) {
  todoElem.remove(); // удаление элемента
  todoDicrement();
}

function onCompleteElement(todoElem, btnContain, todoNameElem){
  todoElem.remove();
  btnContain.remove();
  const done = document.querySelector(".done__contain")
  done.append(todoElem)
  todoNameElem.classList.remove();
  todoNameElem.classList.add("done__name");
  doneIncrement();
  todoDicrement();
}

function todoIncrement() {
  const increment = document.querySelector(".todo__result"); // увеличение количества задач
  increment.textContent = Number(increment.textContent) + 1;
}

function todoDicrement() {
  const dicrement = document.querySelector(".todo__result"); // уменьшение количества задач
  dicrement.textContent = Number(dicrement.textContent) - 1;
}

function doneIncrement() {
  const increment = document.querySelector(".done__result"); // увеличение количества задач
  increment.textContent = Number(increment.textContent) + 1;
}
