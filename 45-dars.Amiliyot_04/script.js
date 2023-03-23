const showbBtn = document.getElementById('show-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function removeClass() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function addClass() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

function ketDown(i) {
    if(i.key == 'Escape') {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        console.log(i);
    } else if(i.key == ' ') {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
};

showbBtn.addEventListener('click', removeClass);
closeBtn.addEventListener('click', addClass );
overlay.addEventListener('click', addClass );
document.addEventListener('keydown', ketDown);