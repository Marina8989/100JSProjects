const storageInput = document.querySelector('.inputText');
const text = document.querySelector('p');
const button = document.querySelector('button');
const storedInput = localStorage.getItem('textinput');

if(storageInput) {
     text.textContent = storedInput; 
}

storageInput.addEventListener('input', e => {
    text.textContent = e.target.value;
})

const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent);
    storageInput.value = '';
}

button.addEventListener('click', saveToLocalStorage)