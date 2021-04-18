const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

function addTodo(e) {
    e.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    const newList = document.createElement('li');
    newList.classList.add('newList');
    newList.innerText = todoInput.value;
    todoDiv.append(newList);

    const trash = document.createElement('button');
    trash.classList.add('trash');
    trash.innerHTML = '<i class="fas fa-trash" />';

    const complete = document.createElement('button');
    complete.classList.add('completed');
    complete.innerHTML = '<i class="fas fa-check" />';

    newList.append(complete);
    newList.append(trash);

    todoInput.value = '';
    todoList.append(todoDiv);
}

function deleteTodo(e) {
    let item = e.target;
    
    if(item.classList[0] === 'trash') {
        let todo = item.parentElement;
        todo.addEventListener('click', e => {
            todo.remove();
        })
    }
}