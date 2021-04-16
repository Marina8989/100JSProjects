//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('cick', deleteCheck)


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

function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
       const todo = item.parentElement;
       todo.remove();
    }

    if(item.classList[0] === 'completed-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}