const totals = document.querySelector('#totals');
const shares = document.querySelector('#shares');
const scores = document.querySelector('#scores');
const totalPayment = document.querySelector('.totalPayment');
const btn = document.querySelector('.calculate');
const x = document.querySelector('.x');



btn.addEventListener('click', () => {

    if(totals.value == '' || shares.value == '' || scores.value == '') {
          console.log('please enter info');
    }
    if(scores[1].value == 'great') {
        let s = ((+totals.value * 20) / 100) / (+shares.value);
         x.innerText = `Each of you have to pay: $${s}`;
         totalPayment.append(x);
    }
})


