const body = document.querySelector('body');
const container = document.querySelector('.container');
const colorText = document.querySelector('.color-text');
const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
];

// random color function

function getRandom() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomNumbers = Math.trunc(Math.random() * values.length);
        color += values[randomNumbers];
    }
    return color;
}

function setGradient() {
    const color1 = getRandom();
    const color2 = getRandom();
    const randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(
        ${randomDeg}deg, ${color1}, ${color2}
    )`;

    body.style.backgroundImage = `${bgColor}`;
    colorText.textContent = `${bgColor};`;
}

setGradient();

container.addEventListener('mousedown', setGradient); // 🤑