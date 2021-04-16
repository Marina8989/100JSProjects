const totals = document.querySelector('#totals');
const shares = document.querySelector('#shares');
const scores = document.querySelector('#scores');
const totalPayment = document.querySelector('.totalPayment');
const btn = document.querySelector('.calculate');
const x = document.querySelector('.x');


btn.addEventListener('click', calc);

function calc() {
    let t = Number(totals.value); //100
    let sh = Number(shares.value); // 2
    let sc = Number(scores.value)/100; // 20 /100 = 0.2

    let num = (t * sc) / sh;

    x.innerText = `You should tip: $${num}`;
    
}