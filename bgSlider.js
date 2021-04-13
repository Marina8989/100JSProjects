const img = [
    {
        pic: 'back.jpg'
    },
    {
        pic: 'front.jpg'
    },
    {
        pic: 'orange.jpg'
    }
]

const container = document.querySelector('.container');
const left = document.querySelector('.left')
const right = document.querySelector('.right');

let count = 0;

right.addEventListener('click', () => {
  console.log(count);
  container.style.background = 'url('+ img[count].pic +')';
  container.style.backgroundSize = 'cover';
  count++;
  console.log(count);
  if(count === img.length) {
      count = 0;
  }
    
})