function avg(numbers){
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num){
    let count = 0;
    for(let i = 2; i <= num / 2; i++){
        if(num % i === 0) count++;
    }
    if(count === 0) return true;
    return false;
}

function factorial(num){
    if(num <= 0) return -1;
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

module.exports = {
    avg,
    prime,
    factorial
}