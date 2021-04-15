const btn = document.querySelectorAll('.a');
const items = document.querySelectorAll('.food');
const input = document.querySelector('input');
const searchBtn = document.querySelector('.search');

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
      let filter = e.target.dataset.btn;
       
        items.forEach(product => {
            if(button.classList.contains('all')) {
               product.style.display = 'block';
            }else {
              if(product.classList.contains(filter)){
                product.style.display = 'block';
              }else {
                  product.style.display = 'none';
              }
            }
        })
    })
})



function getInput() {
    searchBtn.addEventListener('click', () => {
        if(input.value == '') {
           console.log('please enter item...');
           input.value = '';
        }else {
            items.forEach(food => {
                if(input.value == 'all') {
                   food.style.display = 'block';
                   input.value = '';
                }else if(food.classList.contains(`${input.value}`)){
                    food.style.display = 'block';
                    input.value = '';
                }
                else {
                    food.style.display = 'none';
                }
            })
            
       }
    })
}
getInput()




