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
