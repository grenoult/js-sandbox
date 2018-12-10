/**
 * MDN Definition: Generators are functions which can be exited and later re-entered. 
 * Their context (variable bindings) will be saved across re-entrances.
 * 
 * Generators are function starting with * which behave like an interface:
 * When we call the generator, the yield value will be wrapped around
 * an object with properties `value` and `done`.
 * Yield means producing a value out of the generator.
 * 
 * Generators are a state machine, they can be use to modify iterators.
 */

 // Example 1: generator by itself
function *myGen() {
    yield 1;
    yield 2;
}

var gen = myGen();

gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: undefined, done: true }

// Example 2: custom object generator
var obj = {
    // [Symbol.iterator]: function* gen() => { // long function call, ideal for recursive methods
    *[Symbol.iterator]() {
        for (var v of this.values) {
            if (v%2 === 0) {
                yield v; // Let's say I want only even values
            }
        }
    },
    values: [1,2,3,4,5,6,7,8,9,10]
};

[...obj]; // [ 2, 4, 6, 8, 10 ]

// Example 3: today date generator - TODO terrible example
var now = function() {
    function* myGen() {
        while (true) {
            yield new Date().toLocaleString();
        }
    }
    return myGen().next().value;
}
console.log(now());

// Example 4: custom iterator using destructuring in iterator parameters
var numbers = {
    *[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
        for (let i = start; i <= end; i = i + step) {
            yield i;
        }
    }
};

// should print 0..100 by 1s
for (let num of numbers) {
    console.log(num); // 1 2 3 4 ... 99 100
}

// should print 6..30 by 4s
for (let num of numbers[Symbol.iterator]({
    start: 6,
    end: 30,
    step: 4
})) {
    console.log(num); // 6 10 14 .. 26 30
}


