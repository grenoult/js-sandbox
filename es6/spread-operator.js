/**
 * Gather and spread operator: `...`
 * Example 1 shows gathering values together.
 * Example 2 shows spreading values apart.
 */

 // Example 1: get all arguments in a function call; also call gather operator
(function (...args) { // assignment context: gathers
    console.log(args); // [ 3, 4, 5 ]
 })(3,4,5);

 // Example 2: spread array elements out for function parameters
 var arr = ['a', 'b', 'c'];
 (function (value1, value2, value3) {
     console.log(value1); // a
     console.log(value2); // b
     console.log(value3); // c
})(...arr); // list context: spreads

// Example 3: combine parameters, gather and spread operator
(function (...values) {
    console.log(values); // ['z', 'a', 'b', 'c']
})('z', ...arr);

// Example 4: define a list of other parameters
(function (first, second, ...theRest) {
    console.log(first); // 'a'
    console.log(second); // 'b'
    console.log(theRest); // ['c']
})(...arr);

// Example 5: replace concat: gathering array spreading
var arrayOne = ['a', 'b', 'c'];
var arrayTwo = ['d', 'e'];
console.log([...arrayOne, ...arrayTwo]); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(['z', ...arrayOne, ...arrayTwo, 'f']); // [ 'z', 'a', 'b', 'c', 'd', 'e', 'f' ]

// Example 6: split each charater of a string in an array
// This is because string is iterable
console.log([...'Guillaume']); // [ 'G', 'u', 'i', 'l', 'l', 'a', 'u', 'm', 'e' ]

// Example 7:
function foo(a, b, c, ...rest) {
    return [a, ...rest];
}

function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];

    return foo(...a1, ...a2);
}

console.log(
    bar().join("") === "281012"
);
