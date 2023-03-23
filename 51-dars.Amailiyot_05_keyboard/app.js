const container = document.querySelector('.container');
const box = document.querySelectorAll('.box');
const content = document.querySelectorAll('.content');

window.addEventListener('keydown', (e)=> {
    container.remove();
    box.forEach(i=> {
        i.classList.remove('hidden');
    });

    content[0].innerHTML = `<h3>${e.key == ' ' ? "Space" : e.key}</h3>`;
    content[1].innerHTML = `<h3>${e.keyCode}</h3>`;
    content[2].innerHTML = `<h3>${e.code}</h3>`; 
});