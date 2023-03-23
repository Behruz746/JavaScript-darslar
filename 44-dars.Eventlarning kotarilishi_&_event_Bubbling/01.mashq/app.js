const ball = document.querySelectorAll('.ball');
const startText = document.querySelector('.start__text');
const nodeStart = document.querySelector('.start');
const balCorridor = document.querySelector('.ball__corridor');
const time = document.querySelector('.time');

let i;

startText.addEventListener('click', ()=> {
    ball.forEach((a) => {
        i = 0;
        ball[i].classList.add('ballNew');
        i = 1;
        ball[i].classList.add('ballNew1');
        i = 2;
        ball[i].classList.add('ballNew2');
        i = 3;
        ball[i].classList.add('ballNew3');

        a.addEventListener('click', (i)=> {
            i.target.remove();
            time.innerHTML += `<li class='boxTextBall'> ${i.target.textContent} </li>`;
        });
    });
    nodeStart.remove();
});