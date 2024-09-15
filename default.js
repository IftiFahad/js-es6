function add(num1, num2) { 
 
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const sum = add(2, 5);


function add(num1, num2=0) { 
 
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const total = add(5);

function name(first, last = '') {
    const full = first + '' + last;
    return full;
}

function friends(numbs = []) {
    
}