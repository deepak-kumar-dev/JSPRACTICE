//a new file 

/**
 * Simple, Come back commit 
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
    return num1+num2;
};

//-----------------------------------------------

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = [];
    for(let i=1; i<=n; i++){
        if(i%3 === 0 && i%5 === 0){
            res.push("FizzBuzz");
        }else if(i%3 === 0){
            res.push("Fizz");
        }else if(i%5 === 0){
            res.push("Buzz");
        }else{
            res.push(i.toString());
        }
    }
    return res;
};

//-----------------------------------------------

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    return n%2 === 0 ? n : n*2;
};