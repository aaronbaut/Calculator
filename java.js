const add = function(a,b) {
    return a+b;
}
const subtract = function(a,b) {
    return a-b;
}
const multiply = function(a,b) {
    return a*b;
}
const divide = function(a,b) {
    return a/b;
}

let operator = function(a,b,op) {
    if(op==`+`) {
        return add(a,b)
    } else if(op==`-`) {
        return subtract(a,b)
    } else if (op==`x`){
        return multiply(a,b)
    } else if (op==`/`) {
        return divide(a,b)
    }
};
const signs = document.querySelector('.signs');
const addButton = document.createElement('button');
addButton.classList.add('operator');
addButton.innerText = '+'
signs.appendChild(addButton);

const subButton = document.createElement('button');
subButton.classList.add('operator')
subButton.innerText = '-';
signs.appendChild(subButton);

const multButton = document.createElement('button')
multButton.classList.add('operator')
multButton.innerText = 'x';
signs.appendChild(multButton);

const divButton = document.createElement('button');
divButton.classList.add('operator')
divButton.innerText = '/'
signs.appendChild(divButton);

const equalButton = document.createElement('button')
equalButton.classList.add('equal')
equalButton.innerText = '='
signs.appendChild(equalButton);

const content = document.querySelector('.content')
const oneButton = document.createElement('button')
oneButton.classList.add('number')
oneButton.innerText = '1'
content.appendChild(oneButton)

const twoButton = document.createElement('button')
twoButton.classList.add('number')
twoButton.innerText = '2'
content.appendChild(twoButton)

const threeButton = document.createElement('button')
threeButton.classList.add('number')
threeButton.innerText = '3'
content.appendChild(threeButton);

const fourButton = document.createElement('button')
fourButton.classList.add('number')
fourButton.innerText = '4'
content.appendChild(fourButton);

const fiveButton = document.createElement('button')
fiveButton.classList.add('number')
fiveButton.innerText = '5'
content.appendChild(fiveButton);

const sixButton = document.createElement('button')
sixButton.classList.add('number')
sixButton.innerText = '6'
content.appendChild(sixButton);

const sevenButton = document.createElement('button')
sevenButton.classList.add('number')
sevenButton.innerText = '7'
content.appendChild(sevenButton);

const eightButton = document.createElement('button')
eightButton.classList.add('number')
eightButton.innerText = '8'
content.appendChild(eightButton);

const nineButton = document.createElement('button')
nineButton.classList.add('number')
nineButton.innerText = '9'
content.appendChild(nineButton);

const zeroButton = document.createElement('button')
zeroButton.classList.add('number')
zeroButton.innerText = '0'
content.appendChild(zeroButton);

const input = document.querySelector('.input')
const inputField = document.createElement('div')
inputField.classList.add('inputField')
inputField.innerText = 'testestesttesetseestesest'
input.appendChild(inputField);

const clearButton = document.createElement('button')
clearButton.classList.add('clear')
clearButton.innerText = 'clear'
input.appendChild(clearButton);

const numbers = document.querySelectorAll('.number')
let arr = [];
let a = '';
numbers.forEach((number) =>{
    number.addEventListener('click', function(e) {
        console.log(e.target.innerText)
         a += `${e.target.innerText}`
         arr.push(`${a}`)
        return input.innerText = a; 
    });
});

let op = '';
const symbols = document.querySelectorAll('.operator')
symbols.forEach((symbol) => {
    symbol.addEventListener('click', (e) =>{
        console.log(`This selected ${e.target.innerText}`)
        arr.push(`${e.target.innerText}`)
        op = `${e.target.innerText}`
        return input.innerText = op;
    });
});