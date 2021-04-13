const btn = document.querySelector('button');
let body = document.querySelector('body');

function randColor() {
    
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);


    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}


btn.addEventListener('click', () => {
     body.style.backgroundColor = randColor();
})
