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