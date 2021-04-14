const btn = document.querySelectorAll('.a');
const img = document.querySelectorAll('img');
const items = document.querySelectorAll('.food');
const span = document.querySelectorAll('span');



btn.forEach(button => {
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        let filter = e.target.dataset.item;
        console.log(filter);

      items.forEach(item => {
          if(filter === 'all') {
             item.style.display = 'block';
          }else{
              if(item.classList.contains(filter)) {
                  item.style.display = 'block';
              }else {
                  item.style.display = 'none';
              }
          }
      })
    })
})