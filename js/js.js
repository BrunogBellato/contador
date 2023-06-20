const value = document.getElementById('j1')
const plusButton = document.getElementById('btn1')
const minusButton = document.getElementById('btn2')
const resetButton = document.getElementById('btnr')

const value2 = document.getElementById('j2')
const plusButton2 = document.getElementById('btn3')
const minusButton2 = document.getElementById('btn4')

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});



resetButton.addEventListener('click', () => {
    count = 0;
    count2 = 0;
    updateValue();
    updateValue2();
});

document.addEventListener('mouseup', () => clearInterval(intervalId))

// --------------------------------------------------------------------------

const updateValue2 = () => {
    value2.innerHTML = count2;
};

let count2 = 0;
let intervalId2 = 0;

plusButton2.addEventListener('mousedown', () => {
    intervalId2 = setInterval(() => {
        count2 += 1;
        updateValue2();
    }, 100);
});

minusButton2.addEventListener('mousedown', () => {
    intervalId2 = setInterval(() => {
        count2 -= 1;
        updateValue2();
    }, 100);
});

document.addEventListener('mouseup', () => clearInterval(intervalId2))