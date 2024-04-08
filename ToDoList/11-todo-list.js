const todoList = [
  {
    name: "make dinner",
    dueDate: "2024-04-16",
  },
  { name: "wash dishes", dueDate: "2024-03-07" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    // Using destructuring bellow we can have shorter code. Because the variable and the property have the same name.
    const { name, dueDate } = todoObject;
    const html = `<div>${name}</div>
    <div> ${dueDate} </div> 
    <button onClick='
      todoList.splice(${i},  1);
      renderTodoList();' class="delete-button">Delete</button>`;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-input");
  let name = inputElement.value;

  const dateInputElement = document.querySelector(".js-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({ name, dueDate });

  inputElement.value = "";

  renderTodoList();
}
