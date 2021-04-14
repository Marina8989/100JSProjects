const pictures = ['back.jpg', 'front.jpg', 'orange.jpg'];

const container = document.querySelector('.container');
const btn = document.querySelectorAll('.btn');
let count = 0;

btn.forEach(button => {
    button.addEventListener('click', () => {
        if(button.classList.contains('left')){
             count--;
             if(count < 0) {
             count = pictures.length - 1;
             }
             container.style.backgroundImage = 'url(' + pictures[count] + ')';
             container.style.backgroundSize = 'cover';
             container.style.backgroundPosition = 'center';
        }

        if(button.classList.contains('right')) {
           count++;
           if(count > pictures.length -1) {
              count = 0;
           }
           container.style.backgroundImage = 'url(' + pictures[count] + ')';
           container.style.backgroundSize = 'cover';
           container.style.backgroundPosition = 'center';
        }
    })
})
