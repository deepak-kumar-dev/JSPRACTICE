/**
 * Day 1 : 2620 Counter
 * 
 * Given an integer n, return a counter function. 
 * This counter function initially returns n and then returns 1
 * more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 * 
 */

var createCounter = function(n) {
    return function() {
        return n++; 
    };
};

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

//-------------------------------------------------------------------------


/**
 * Day 2 : 2265 Counter 2
 * 
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 * The three functions are:
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var value = init;
    var increment = () => {
        return ++value;
    }
    var decrement = () => {
        return --value;
    }
    var reset = () => {
        value = init;
        return value;
    }

    return {increment, decrement, reset}
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


//-------------------------------------------


/**
 * 
 * Day 3 : 2619. Array Prototype Last
 * 
 * 
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length-1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


/**
 * Day 3 Problem 2 : 2667. Create Hello World Function
 * 
 * 
 * @return {Function}
 */
var createHelloWorld = function() {
    return () => "Hello World";
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */



/**
 * Day 3 Problem 3 : 2703. Return Length of Arguments Passed
 * 
 * 
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

//---------------------------------------------------

/**
 * Day 4 : 2666. Allow One Function Call
 * 
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var check = 0;
    return function(...args){
        if(check){
            return;
        }else{
        ++check;
        return fn(...args)
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


/**
 * 
 * Day 4 Problem 2 : 2727. Is Object Empty
 * 
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){
        if(obj.length == 0){
            return true;
        }else{
            return false;
        }
    }else{
        if(Object.keys(obj).length){
            return false
        }else{
            return true
        }
    }
};

//---------------------------------------------------------


/**
 * Day 5 : 2635. Apply Transform Over Each Element in Array
 * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var returnedArray = []
    for(i=0; i<arr.length; i++){
        returnedArray.push(fn(arr[i], i))
    }
    return returnedArray;
};

//--------------------------------------------------


    /** 
     * Day 6: 2726. Calculator with Method Chaining
     */
class Calculator {
    constructor(value) {
        this.val = value;
    }

    add(value){
        this.val = this.val + value;
        return this;
    }

    subtract(value){
        this.val = this.val - value;
        return this;
    }
  
    multiply(value) {
        this.val = this.val * value;
        return this;
    }
    
    divide(value) {
        if(value === 0) throw new Error("Division by zero is not allowed"); 
        this.val = this.val / value;
        return this;
    }
    
    power(value) {
        this.val = Math.pow(this.val,value);
        return this;
    }
    
    getResult() {
        return this.val;
    }
}

// Input: 
// actions = ["Calculator", "add", "subtract", "getResult"], 
// values = [10, 5, 7]
// Output: 8
// Explanation: 
// new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8


///---------------------------------------------------------------------



/**
 * Day 7 : 2626. Array Reduce TransformationDay 7 : 2626. Array Reduce Transformation
 * After 2 days gap
 * 
 * 
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    for(let i = 0; i < nums.length; i++ ){
        result = fn(result , nums[i]);
    }
    return result;
};



/**
 * 
 * Day 8 : 2677. Chunk Array
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkedArray = []

for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    chunkedArray.push(chunk);
}

return chunkedArray;
};

//-----------------------------------------------------


/**
 * 
 * 
 * Day 9 : 2629. Function Composition
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let a = x;
        for(let i = functions.length-1; i >= 0; i--){
            a = functions[i](a);
        }
        return a;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/**
 * 
 *   Day 9 Problem 2 : 2634. Filter Elements from Array
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let rArray = [];
    for(let i = 0; i < arr.length; i++){
       if(fn(arr[i], i)){
            rArray.push(arr[i])
       }
    }
    return rArray;
};

//------------------------------------

/**
 * 
 * Day 10: 268. Missing Number
 * 
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // for(let i = 0; i <= nums.length ; i++){
    //     if(nums.indexOf(i) < 0){
    //         return i;
    //     }
    // }
    // return 0;
    const n = nums.length;
    const total = (n * (n+1)) / 2;
    const realTotal = nums.reduce((acc, num) => acc+num, 0);
    return total - realTotal;
};


//----------------------------------------------------

/**
 * Day 11: 2621. Sleep
 * 
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/**
 * Day 11: Problem 2: 2723. Add Two Promises
 * 
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let res = await promise1 + await promise2;
    return new Promise(resolve => resolve(res));
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

//////////////////////////-----------

/**
 * 
 *  Day 12 : 2625. Flatten Deeply Nested Array
 * 
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const newArr = [];

    function helper(arr, depth) {
        for (const val of arr) {
            if (Array.isArray(val) && depth < n) {
                helper(val, depth + 1);
            } else {
                newArr.push(val);
            }
        }
        return newArr;
    }
    return helper(arr, 0);
}


/**
 * 
 * Day 13: 2724. Sort By
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};


//----------------------------------------------------------------

/**
 * 
 * Day 14 : 2695. Array Wrapper
 * 
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let sum = 0;
    for(let i=0; i<this.nums.length;i++){
        sum = sum+this.nums[i];
    }
    return sum;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return "\["+this.nums+"\]";
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */



//-------------------------------------


/**
 * 
 * Day 15 : 2648. Generate Fibonacci Sequence
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    var secondLast = 0;
    var last = 1;
    while (true) {
        yield secondLast;
        var next = secondLast + last;
        secondLast = last;
        last = next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */


/**
 * 
 * 1672. Richest Customer Wealth
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let rA = [];
    for(let i=0; i<accounts.length;i++){
        rA.push(accounts[i].reduce((a, b) => {return a+b}));
    }
    return Math.max(...rA)
};

/**
 * 
 * 1470. Shuffle the Array
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const fArray = nums.slice(0, n);
    const sArray = nums.slice(n, nums.length);
    let res = [];
    for(let i = 0; i <= n-1; i++){
        res.push(fArray[i]);
        res.push(sArray[i]);
    }
    return res;
};

/**
 * 
 * 1732  Find the Highest Altitude
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let res = [0];
    // return res[res.length-1]
    for (let i = 0; i <= gain.length - 1; i++) {
        res.push(res[res.length - 1] + gain[i]);
    }
    return Math.max(...res);
};

/**
 * 
 * 1920. Build Array from Permutation
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let res = [];
    for(let i = 0; i <= nums.length-1; i++){
        res.push(nums[nums[i]]);
    }
    return res;
};

