
const sendBtn = document.querySelector('.sendBtn');
const resetBtn = document.querySelector('.resetBtn');
const getBtn = document.querySelector('.getBtn');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userMessage = document.querySelector('#userMessage');

let getName = localStorage.getItem('name');
let getEmail = localStorage.getItem('email');
let getMessage = localStorage.getItem('message');

sendBtn.addEventListener('click', sendContact);
resetBtn.addEventListener('click', resetContact)
getBtn.addEventListener('click', getContact);

function resetContact() {
    userName.value = '';
    userEmail.value = '';
    userMessage.value = '';

    localStorage.clear();
}


function sendContact() {
     if(userName.value == '' || userEmail.value == '' || userMessage.value == '') {
        const h2 = document.querySelector('h2');
        h2.innerText = 'Can not leave empty input';
        h2.style.color = 'red'; 
        setTimeout(() => {
             h2.innerText = 'Please Contact me';
             h2.style.color = 'black';
         }, 2000);
     }else {
          let userN = localStorage.setItem('name', userName.value);
          let userE = localStorage.setItem('email', userEmail.value);
          let userM = localStorage.setItem('message', userMessage.value);


           userName.value = '';
           userEmail.value = '';
           userMessage.value = '';
     }
}

function getContact() {
    const newDiv = document.createElement('div');
    const newH4 = document.createElement('h4');
    const newH3 = document.createElement('h3');
    const pNew = document.createElement('p');

    newH4.innerText = getName;
    newH3.innerText = getEmail;
    pNew.innerText = getMessage

    
    newDiv.append(newH4);
    newDiv.append(newH3);
    newDiv.append(pNew);
    document.body.append(newDiv);
}