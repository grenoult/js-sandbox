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
