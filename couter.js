const low = document.querySelector('.low');
const add = document.querySelector('.add');
const h3 = document.querySelector('h3');
let num = 0;
h3.innerText = num;

low.addEventListener('click', () => {
   h3.innerText = num--;
})
add.addEventListener('click', () => {
    h3.innerText = num++;
})