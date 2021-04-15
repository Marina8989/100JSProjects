const food = document.querySelectorAll('.food');
const modal = document.querySelector('.modal')

food.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('active');
    })
    
})
modal.addEventListener('click', () => {
    modal.classList.remove('active');
})