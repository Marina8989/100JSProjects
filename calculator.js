const prevNum = document.querySelector('.prevNum');
const newNum = document.querySelector('.newNum');
const sum = document.querySelector('h2');
const keys = document.querySelectorAll('.key');
 

keys.forEach(key => {
    key.addEventListener('click', () => {
        if(key == '+') {
            let summ = prevNum + newNum;
            sum.innerText = summ;
        }
    })
})
