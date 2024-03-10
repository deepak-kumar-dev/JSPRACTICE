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

//--------------------------------------

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let res = 0;
    for(let i=1; i<=n; i++){
        if(i%3==0 || i%5 ==0 || i%7 == 0 ){
            res = res+i;
        }
    }
    return res;
};

//--------------------------------------------

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let n = num;
    let count = 0;
    while(n>0){
        count ++;
        if(n %2 === 0){
            n = n/2;
        }else{
            n = n-1;
        }
    }
    return count;
};