/**
 * Day 1
 * 
 * Counter : 
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