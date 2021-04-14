const btn = document.querySelectorAll('.a');
const items = document.querySelectorAll('.food');

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



