const totals = document.querySelector('#totals');
const shares = document.querySelector('#shares');
const scores = document.querySelector('#scores');
const totalPayment = document.querySelector('.totalPayment');
const btn = document.querySelector('.calculate');
const x = document.querySelector('.x');


   if(scores[1].value == 'great') {
       btn.addEventListener('click', () => {
          let s = ((+totals.value * 20) / 100) / (+shares.value);
            x.innerText = `Each of you have to pay: $${s}`;
            totalPayment.append(x);
       })
  }

 if(scores[2].value == 'good') {
     btn.addEventListener('click', () => {
        let n = ((+totals.value * 10) / 100) / (+shares.value);
        x.innerText = `Each of you have to pay: $${n}`;
        totalPayment.append(x);
     })
  }




// btn.addEventListener('click', () => {
//   if(scores[1].value == 'great') {
//      let s = ((+totals.value * 20) / 100) / (+shares.value);
//         x.innerText = `Each of you have to pay: $${s}`;
//         totalPayment.append(x);
//   }
//   if(scores[2].value == 'good') {
//      let n = ((+totals.value * 10) / 100) / (+shares.value);
//         x.innerText = `Each of you have to pay: $${n}`;
//         totalPayment.append(x);
//   }

// })




// let s = ((+totals.value * 20) / 100) / (+shares.value);
//                   x.innerText = `Each of you have to pay: $${s}`;
//                   totalPayment.append(x);
//                   break;



// let n = ((+totals.value * 10) / 100) / (+shares.value);
//                  x.innerText = `Each of you have to pay: $${n}`;
//                  totalPayment.append(x);
//                  break;


// let y = ((+totals.value * 2) / 100) / (+shares.value);
//                  x.innerText = `Each of you have to pay: $${y}`;
//                  totalPayment.append(x);
//                  break; 