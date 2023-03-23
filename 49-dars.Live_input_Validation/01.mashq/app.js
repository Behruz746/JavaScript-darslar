const btnCenterest = document.querySelector('.btn_centerest');
const over = document.querySelector('.over');
const overHeaderForm = document.querySelector('.overHeader__form');
const form = document.querySelector('#form');
const buttonRegEx = document.querySelector('#button__regEx');

const regEX = /^[a-zA-Z0-9.,@]{6,12}$/;

btnCenterest.addEventListener('click', ()=> {
    over.classList.add('overHeader');
    overHeaderForm.classList.remove('hidden');
});

over.addEventListener('click', ()=> {
    over.classList.remove('overHeader');
    overHeaderForm.classList.add('hidden');
});

form.addEventListener('click', (e)=> {
    e.preventDefault(); // preventDefault submit not update
});

document.addEventListener('keydown', (i)=> {
    if(i.key == 'Escape') {
        over.classList.remove('overHeader');
        overHeaderForm.classList.add('hidden');
        
    } else if(i.key == 'Enter') {
        if(regEX.test(form.inputD.value)) {
            overHeaderForm.style.backgroundColor = 'rgba(0, 255, 0, 0.55)';
        } else {
            overHeaderForm.style.backgroundColor = '#d00';
        }
    };
});

buttonRegEx.addEventListener('click', ()=> {

    if(regEX.test(form.inputD.value)) {
        overHeaderForm.style.backgroundColor = 'rgba(0, 255, 0, 0.55)';
    } else {
        overHeaderForm.style.backgroundColor = '#d00';
    }
});

form.inputD.addEventListener('keyup', (i)=> {
    if(regEX.test(i.target.value)) {
        overHeaderForm.style.backgroundColor = 'rgba(0, 255, 0, 0.55)';
    } else {
        overHeaderForm.style.backgroundColor = '#d00';
    }
});