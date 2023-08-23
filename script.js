
let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');
let buttons = document.querySelectorAll('button');
let clear = document.getElementById('clear');
let del = document.getElementById('delete');

let displayValue1 = '';
let displayValue2 = '';
let firstNum = '';
let secondNum = '';

function updateDisplay(num) {
    if (num === '÷' || num === 'x' || num === '-' || num === '+' || num === '/') {
        operator = num;
        firstNum = displayValue1;
        displayValue2 = displayValue1 + ' ' + num + ' ';
        display2.innerHTML = displayValue2;
        displayValue1 = '';
        display1.innerHTML = displayValue1;
    }
    if (num !== '=' && num !== '÷' && num !== 'x' && num !== '-' && num !== '+' && num !== '/') {
        displayValue1 = displayValue1+num;
        display1.innerHTML = displayValue1;
    }
    if (num === '='){
       secondNum = displayValue1
       displayValue1 = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
       display1.innerHTML = displayValue1;
    }
    
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === 'x') {
        return multiply(a,b);
    } else if (operator === '/' || operator === '÷') {
        return divide(a,b);
    }
}


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b) {
    return a/b;
}


clear.addEventListener('click', function(e) {
    displayValue1 = '';
    displayValue2 = '';
    display1.innerHTML = displayValue1;
    display2.innerHTML = displayValue2;
  });


del.addEventListener('click', function(e) {
    displayValue1 = displayValue1.slice(0, -1);
    display1.innerHTML = displayValue1;
  })