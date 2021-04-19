const sendBtn = document.querySelector('.sendBtn');
const resetBtn = document.querySelector('.resetBtn');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userMessage = document.querySelector('#userMessage');

sendBtn.addEventListener('click', sendContact);
resetBtn.addEventListener('click', resetContact)

function resetContact() {
    userName.value = '';
    userEmail.value = '';
    userMessage.value = '';
}



function sendContact() {
     if(userName.value == '' || userEmail.value == '' || userMessage.value == '') {
         console.log('Can not leave empty input');
     }else {

     }

}