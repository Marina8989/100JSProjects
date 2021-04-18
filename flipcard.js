const addBtn = document.querySelector('.add');
const modal = document.querySelector('.modal');
const question = document.querySelector('#question');
const answer = document.querySelector('#answer');
const closeBtn = document.querySelector('.closeBtn');
const saveBtn = document.querySelector('.save');
const qamodal = document.querySelector('.qamodal');


addBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

saveBtn.addEventListener('click', addModal);

function addModal() {

    const modalDiv = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.innerText = question.value;

    const showBtn = document.createElement('button');
    showBtn.innerText = 'show';

    const hideBtn = document.createElement('button');
    hideBtn.innerText = 'hide answer';
  
   modalDiv.append(h3);
   modalDiv.append(showBtn);
   modalDiv.append(hideBtn);
   question.value = '';
   qamodal.append(modalDiv);
}