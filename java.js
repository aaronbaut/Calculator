const add = function(x,y) {
    return x+y;
}
const subtract = function(x,y) {
    return x-y;
}
const multiply = function(x,y) {
    return x*y;
}
const divide = function(x,y) {
    return x/y;
}

let operator = function(x,y,op) {
    if(op==`+`) {
        return add(x,y)
    } else if(op==`-`) {
        return subtract(x,y)
    } else if (op==`x`){
        return multiply(x,y)
    } else if (op==`/`) {
        return divide(x,y)
    }
};