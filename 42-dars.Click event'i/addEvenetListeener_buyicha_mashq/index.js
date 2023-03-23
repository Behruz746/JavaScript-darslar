const overlay = document.querySelector('.overlay');
const items = document.querySelectorAll('.onboarding__item');
const button = document.querySelector('.button');

let i;

button.addEventListener('click', () => {
    i = 0;
    overlay.classList.remove('hide');
    items[i].style.zIndex = '10';
    items.forEach(i => {
        i.style.cursor = 'pointer';
    });

    // men qilganim

    // items[i].addEventListener('click', () => {
    //     items[i].style.zIndex = '-10';
    //     i = 1;
    //     items[i].style.zIndex = '20';

    //     items[i].addEventListener('click', () => {
    //         items[i].style.zIndex = '-20';
    //         i = 2;
    //         items[i].style.zIndex = '30';

    //         items[i].addEventListener('click', () => {
    //             overlay.classList.add('hide');
    //             items[i].style.zIndex = '-30'; 
    //         });
    //     });
    // });
});

    // videoda qilingani

items.forEach(item => {
    item.addEventListener('click', () => {
        if(!overlay.classList.contains('hide')) {
            items[i].style.zIndex = '-10';
            items[i].style.cursor = 'default';
            i++
        }
        if(i < 3) {
            items[i].style.zIndex = '10';
        } else {
            overlay.classList.add('hide');
        }
    });
});