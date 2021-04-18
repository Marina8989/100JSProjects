const input = document.querySelector('.listItem');
const btn = document.querySelector('.btn');
const listUL = document.querySelector('.list');


btn.addEventListener('click', addList);
listUL.addEventListener('click', deleteList);

function addList(e) {
    e.preventDefault();
    
    const newDIV = document.createElement('div');
    const li = document.createElement('li');
    const btnDelete = document.createElement('button');

    newDIV.classList.add('listDiv');
    li.classList.add('listItem');
    btnDelete.classList.add('btn-delete');

    li.innerText = input.value;
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';

    li.append(btnDelete);
    newDIV.append(li);

    input.value = '';

    listUL.append(newDIV)
}

function deleteList(e) {
    let item = e.target;
     
    if(item.classList[0] == 'fas') {
       let par = item.parentElement.parentElement;
       par.remove();
    }  
    if(item.classList[0] == 'listItem') {
       let par = item.parentElement;
       par.remove();
    }
    
}