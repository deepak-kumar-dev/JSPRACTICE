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

//---------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let aSum = 0;
    let dSum = 0;
    for(let i = 0; i < nums.length; i++){
        aSum = aSum + nums[i];
        if(nums[i] >= 10){
            let c = nums[i];
            while(c>0){
                dSum = dSum + (c%10);
                c = Math.floor(c/10);
            } 
        }else{
            dSum = dSum + nums[i];
        }
    }
    return aSum - dSum
};

//-----------------------------------

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0) return x;
    for(let i=1; i<= x;i++){
        if(i*i == x){
            return i;
        }else if(i*i > x){
            return i-1;
        }
    }
};