//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoBtn.addEventListener('click', addTodo);


//Functions
function addTodo(event) {
   event.preventDefault();
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');

   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.append(newTodo);

   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add('completed-btn');
   todoDiv.append(completedButton);

   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add('trash-btn');
   todoDiv.append(trashButton);

   todoList.append(todoDiv);
   todoInput.value = '';
}