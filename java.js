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
            return input.innerText = 'Can\'t divide by zero!'
        } else {
            return divide(a,b)
        }
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


const decimalButton = document.createElement('button')
decimalButton.classList.add('decimal')
decimalButton.innerText = '.'
content.appendChild(decimalButton)

const clearButton = document.createElement('button')
clearButton.classList.add('clear')
clearButton.innerText = 'clear'
content.appendChild(clearButton);

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
        console.log(e.target.innerText)
         arr[i] += `${e.target.innerText}`
        return input.innerText = arr[i]; 
    });
});

let arr2 = [];
let x = 0;
const symbols = document.querySelectorAll('.operator')
symbols.forEach((symbol) => {
    symbol.addEventListener('click', (e) =>{
        if((Boolean(arr[i]) && Boolean(arr[i-1]))) {
            console.log(`${e.target.innerText}`) 
            i++;
            x++; 
            arr[i] = '' 
            arr2[x] = ''
            arr2[x] = `${e.target.innerText}`
            arr[i]= operator(arr[i-2],arr[i-1],arr2[x-1]) 
            i++;
            arr[i] = '' 
            let answer = operator(arr[i-3],arr[i-2],arr2[x-1])
            arr[i] = answer.toFixed(3);
            return input.innerText =  answer.toFixed(3)
        } else {
             console.log(`${e.target.innerText}`)
            i++;
            arr2[x] = `${e.target.innerText}`
            arr[i] = ''
            return input.innerText = arr2[x]
        } i++;
    });
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', (e) => {
    if(arr[i] == '') {
        return input.innerText = `0`
    } else if(arr2[x] === undefined && Boolean(arr[i])) {
        return input.innerText = `${arr[i]}`
    } else {
        i++;
    console.log(`${e.target.innerText}`); 
    let answer = operator(arr[i-2],arr[i-1],arr2[x])
    arr[i] = answer.toFixed(3)
    i++;
    arr[i] = '';
    return input.innerText = answer.toFixed(3)
    }
    
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', (e)=>{
    arr.length = 0;
    arr2.length = 0;
    i=0;
    x=0;
    input.innerText = '0'
    arr[i] = '';
    arr2[x] = '';
})

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (e) =>{
    let answerField = input.innerText
    if (answerField.includes('.')) {
        return answerField
    } else {
        arr[i] += `${e.target.innerText}`
        return input.innerText = arr[i]
    }
})