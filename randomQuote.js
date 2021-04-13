const quotes = [
    {
        q: 'One One one',
        author: '-One'
    },
    {
        q: 'Two Two Two',
        author: '-Two'
    },
    {
        q: 'Three three three',
        author: '-Three'
    }
]


const btn = document.querySelector('button');
const quote = document.querySelector('.quote');
const p = document.createElement('p');
const span = document.createElement('span');

btn.addEventListener('click', getQuote)

function getQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    p.innerText = quotes[random].q;
    span.innerText = quotes[random].author;
    span.style.fontSize = 'bold';
    p.append(span);
    quote.append(p);
}