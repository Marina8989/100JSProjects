const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const h3 = document.querySelector('.on');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(text.value) {
       h3.style.display = 'block';
       text.value = '';
        setTimeout(() => {
             h3.style.display = 'none';
        }, 2000);
    }else {
        console.log('Please fill text input first');
    }
})

