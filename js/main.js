// DOM
let display = document.getElementById('displayNumbers');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let input = document.getElementById('numInput');


// variables
let displayNum = 0;


// dom manipulation
let addValues = function() {
    plus.addEventListener('click', function() {
        event.preventDefault();
        let inputVal = input.value;
        let numInput = parseInt(inputVal);
        displayNum += numInput;
        display.textContent = `${displayNum}`
        if (displayNum < 0) {
            display.style.color = 'red';
        } else {
            display.style.color = 'black';
        }
        console.log(`${inputVal}`)
    })
    console.log()
}
let subtractValues = function() {
    minus.addEventListener('click', function() {
        event.preventDefault();
        let inputVal = input.value;
        let numInput = parseInt(inputVal);
        displayNum -= numInput;
        display.textContent = `${displayNum}`
        if (displayNum < 0) {
            display.style.color = 'red';
        } else {
            display.style.color = 'black';
        }
        console.log(`${inputVal}`)
    })
    console.log()
}
subtractValues();
addValues();