const add = function(a,b) {
    return Number(a)+Number(b);
}
const subtract = function(a,b) {
    return a-b;
}
const multiply = function(a,b) {
    return a*b;
}
const divide = function(a,b) {
    if(arr[i] == 0) {
        return a/b;
    }
}

let operator = function(a,b,op) {
    if(op==`+`) {
        return add(a,b)
    } else if(op==`-`) {
        return subtract(a,b)
    } else if (op==`x`){
        return multiply(a,b)
    } else if (op==`/`) {
        if(b == 0) {
            return input.textContent = 'Can\'t divide by zero!'
        } else {
            return divide(a,b)
        }
    }
};
const signs = document.querySelector('.signs');
const addButton = document.createElement('button');
addButton.classList.add('operator');
addButton.textContent = '+'
signs.appendChild(addButton);

const subButton = document.createElement('button');
subButton.classList.add('operator')
subButton.textContent = '-';
signs.appendChild(subButton);

const multButton = document.createElement('button')
multButton.classList.add('operator')
multButton.textContent = 'x';
signs.appendChild(multButton);

const divButton = document.createElement('button');
divButton.classList.add('operator')
divButton.textContent = '/'
signs.appendChild(divButton);

const equalButton = document.createElement('button')
equalButton.classList.add('equal')
equalButton.textContent = '='
signs.appendChild(equalButton);

const content = document.querySelector('.content')
const oneButton = document.createElement('button')
oneButton.classList.add('number')
oneButton.textContent = '1'
content.appendChild(oneButton)

const twoButton = document.createElement('button')
twoButton.classList.add('number')
twoButton.textContent = '2'
content.appendChild(twoButton)

const threeButton = document.createElement('button')
threeButton.classList.add('number')
threeButton.textContent = '3'
content.appendChild(threeButton);

const fourButton = document.createElement('button')
fourButton.classList.add('number')
fourButton.textContent = '4'
content.appendChild(fourButton);

const fiveButton = document.createElement('button')
fiveButton.classList.add('number')
fiveButton.textContent = '5'
content.appendChild(fiveButton);

const sixButton = document.createElement('button')
sixButton.classList.add('number')
sixButton.textContent = '6'
content.appendChild(sixButton);

const sevenButton = document.createElement('button')
sevenButton.classList.add('number')
sevenButton.textContent = '7'
content.appendChild(sevenButton);

const eightButton = document.createElement('button')
eightButton.classList.add('number')
eightButton.textContent = '8'
content.appendChild(eightButton);

const nineButton = document.createElement('button')
nineButton.classList.add('number')
nineButton.textContent = '9'
content.appendChild(nineButton);

const zeroButton = document.createElement('button')
zeroButton.classList.add('number')
zeroButton.textContent = '0'
content.appendChild(zeroButton);

const input = document.querySelector('.input')
const inputField = document.createElement('div')
inputField.classList.add('inputField')
inputField.textContent = '.000'
input.appendChild(inputField);


const decimalButton = document.createElement('button')
decimalButton.classList.add('decimal')
decimalButton.textContent = '.'
content.appendChild(decimalButton)

const clearButton = document.createElement('button')
clearButton.classList.add('clear')
clearButton.textContent = 'clear'
content.appendChild(clearButton);

const backspaceButton = document.createElement('button')
backspaceButton.classList.add('backspace')
backspaceButton.textContent = 'Backspace'
content.appendChild(backspaceButton)

let nextArrayItem = function() {
    i++;
    arr[i] = ''
}


const numbers = document.querySelectorAll('.number')
let arr = [];
let i = 0;
arr[0] = '';
numbers.forEach((number) =>{
    number.addEventListener('click', function(e) {
        console.log(e.target.textContent)
         arr[i] += `${e.target.textContent}`
        return input.textContent = arr[i]; 
    });
});

let arr2 = [];
let x = 0;
const symbols = document.querySelectorAll('.operator')
symbols.forEach((symbol) => {
    symbol.addEventListener('click', (e) =>{
        if((arr[i] == '')) {
            arr2[x] = `${e.target.textContent}`
            return input.textContent = arr2[x]
        } else if((Boolean(arr[i]) && Boolean(arr[i-1]))) {
            console.log(`${e.target.textContent}`) 
            nextArrayItem();
            x++; 
            arr2[x] = ''
            arr2[x] = `${e.target.textContent}`
            let answer = operator(arr[i-2],arr[i-1],arr2[x-1]) 
            arr[i] = answer.toFixed(3);
            nextArrayItem();
            return input.textContent =  answer.toFixed(3)
        } else {
            console.log(`${e.target.textContent}`)
            nextArrayItem();
            arr2[x] = `${e.target.textContent}`
            return input.textContent = arr2[x]
        }
    });
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', (e) => {
    if(arr[i] == '') {
        return input.textContent = `0`
    } else if(arr2[x] === undefined && Boolean(arr[i])) {
        return input.textContent = `${arr[i]}`
    } else {
    nextArrayItem();
    console.log(`${e.target.textContent}`); 
    let answer = operator(arr[i-2],arr[i-1],arr2[x])
    arr[i] = answer.toFixed(3)
    nextArrayItem();
    return input.textContent = answer.toFixed(3)
    }

})

const clear = document.querySelector('.clear')
clear.addEventListener('click', (e)=>{
    arr.length = 0;
    arr2.length = 0;
    i=0;
    x=0;
    input.textContent = '0'
    arr[i] = '';
    arr2[x] = '';
})

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (e) =>{
    let answerField = input.textContent
    if (answerField.includes('.')) {
        return answerField
    } else {
        arr[i] += `${e.target.textContent}`
        return input.textContent = arr[i]
    }
})

const backspace = document.querySelector('.backspace')
backspace.addEventListener('click', (e) => {
    arr[i] = ''
    return input.textContent = arr[i];
})
