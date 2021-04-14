const users = [
    {
        userName: 'Andy',
        about: 'ahgjajaajag consectetur adipisicing elit. Veniam voluptates dolore nihil eligendi sapiente quidem animi atque, dolorem fuga facere corrupti? Officiis sed, aliquid quam voluptates ratione repellat nihil aperiam.'
    },
    {
        userName: 'Bendy',
        about: 'fjajfgafgafgafgafue, dolorem fuga facere corrupti? Officiis sed, aliquid quam voluptates ratione repellat nihil aperiam.'
    },
    {
        userName: 'Gandy',
        about: 'cjffsiuryewfhsdsdbsdsj cem animi atque, dolorem fuga facere corrupti? Officiis sed, aliquid quam voluptates ratione repellat nihil aperiam.'
    }
]
const userName = document.querySelector('.username');
const about = document.querySelector('.about');
const btn = document.querySelectorAll('.btn');
let count = 0;

btn.forEach(button => {
    button.addEventListener('click', () => {
        if(button.classList.contains('left')) {
            count--;
            if(count < 0) {
                count = users.length-1;
            }
            userName.innerText = users[count].userName;
            about.innerText = users[count].about;
        }

        if(button.classList.contains('right')) {
           count++;
           if(count > users.length-1) {
              count = 0;
           }
           userName.innerText = users[count].userName;
           about.innerText = users[count].about;
        }
    })
})