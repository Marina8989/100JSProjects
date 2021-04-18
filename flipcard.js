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
     const h4 = document.createElement('h4');
     const showBtn = document.createElement('button');
     const hideBtn = document.createElement('button');
     

    if(question.value == '' || answer.value == '') {
        const h2 = document.createElement('h2');
        h2.innerText = 'Can not add empty value';
        modal.prepend(h2);
        setTimeout(() => {
            h2.style.display = 'none';
        }, 2000);
    }else{
    h3.innerText = question.value;

    h4.innerText = answer.value;
    h4.style.display = 'none';

    showBtn.innerText = 'show';

    hideBtn.innerText = 'hide answer';
  
   modalDiv.append(h3);
   modalDiv.append(h4);
   modalDiv.append(showBtn);
   modalDiv.append(hideBtn);
   question.value = '';
   answer.value = '';
   qamodal.append(modalDiv);

    } 
}