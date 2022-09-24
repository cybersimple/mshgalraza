const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// console.log(math1)

const questionEl = document.getElementById('question');

const inputEl = document.getElementById('input')

const formEl = document.getElementById('form')

const scoreEl = document.getElementById('score')

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score : ${ score }`

questionEl.innerText = `what is ${ num1 } multiply by ${ num2 }`

const correctAns = num1 * num2;


formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value
    // console.log(userAns, typeof userAns)
    if (userAns === correctAns) {
        score++;
        // console.log(score)
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score))
}


const date = new Date().getFullYear();
console.log(date)

const createEl = document.getElementById('created');
createEl.innerText = `Created on Samsutheen @ ${ date }`