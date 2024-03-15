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


//====================================

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let count = numBottles;
    let rem = numBottles;
    while(rem >= numExchange){
        count = count + Math.floor(rem/numExchange);
        rem = Math.floor(rem/numExchange) + (rem%numExchange)
}
    return count;
};

//---------------------------------------------

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    // Kelvin = Celsius + 273.15
    // Fahrenheit = Celsius * 1.80 + 32.00
    return [celsius + 273.15, celsius * 1.80 + 32.00]
};


//------------------------------------------

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let d = 0;
    let nd = 0;
    for(let i = 1; i<=n; i++){
        if(i%m == 0){
            d = d+i;
        }else{
            nd = nd+i;
        }
    }
    return nd - d;
};


//------------------------------------------

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let mul = 1;
    while(n > 0){
        sum = sum + (n%10);
        mul = mul * (n%10);
        n = Math.floor(n/10, 0);
    }
    return mul - sum;
};

//-------------------------------------

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let rev = 0, n = x;
    while(n > 0){
        rev = n == x? rev + n%10: (rev*10)+ n%10;
        n = Math.floor(n/10,0);
    }
    return rev == x;
};


//----------------------------------------

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0, n = Math.abs(x);
    while (n > 0) {
        rev = n == x ? rev + n % 10 : (rev * 10) + n % 10;
        n = Math.floor(n / 10, 0);
    }
    if (rev > (Math.pow(2, 31) - 1) || rev < -(Math.pow(2, 31) - 1)) {
        return 0
    }
    return x > 0 ? rev : -rev;
};