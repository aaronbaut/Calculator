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
addButton.classList.add('addition');
addButton.innerText = '+'
signs.appendChild(addButton);

const subButton = document.createElement('button');
subButton.classList.add('subtraction')
subButton.innerText = '-';
signs.appendChild(subButton);

const multButton = document.createElement('button')
multButton.classList.add('multiplication')
multButton.innerText = 'x';
signs.appendChild(multButton);

const divButton = document.createElement('button');
divButton.classList.add('division')
divButton.innerText = '/'
signs.appendChild(divButton);

const equalButton = document.createElement('button')
equalButton.classList.add('equal')
equalButton.innerText = '='
signs.appendChild(equalButton);

const content = document.querySelector('.content')
const oneButton = document.createElement('button')
oneButton.classList.add('one')
oneButton.innerText = '1'
content.appendChild(oneButton)

const twoButton = document.createElement('button')
twoButton.classList.add('two')
twoButton.innerText = '2'
content.appendChild(twoButton)

const threeButton = document.createElement('button')
threeButton.classList.add('three')
threeButton.innerText = '3'
content.appendChild(threeButton);

const fourButton = document.createElement('button')
fourButton.classList.add('four')
fourButton.innerText = '4'
content.appendChild(fourButton);

const fiveButton = document.createElement('button')
fiveButton.classList.add('five')
fiveButton.innerText = '5'
content.appendChild(fiveButton);

const sixButton = document.createElement('button')
sixButton.classList.add('six')
sixButton.innerText = '6'
content.appendChild(sixButton);

const sevenButton = document.createElement('button')
sevenButton.classList.add('seven')
sevenButton.innerText = '7'
content.appendChild(sevenButton);

const eightButton = document.createElement('button')
eightButton.classList.add('eight')
eightButton.innerText = '8'
content.appendChild(eightButton);

const nineButton = document.createElement('button')
nineButton.classList.add('nine')
nineButton.innerText = '9'
content.appendChild(nineButton);

const zeroButton = document.createElement('button')
zeroButton.classList.add('zero')
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