/**
 * Destructuring is splitting a function returned value, such as an array, into separate variables.
 */

// Example 1: destructuring array from function return, with default value
function f1() {
    return ['a', 'b', 'c'];
}

var [a, b, c, d = 'd'] = f1();
console.log(a, b, c, d); // a b c d

// Example 2: destructuring array with the gather operator
var rest;
[a, ...rest] = f1();
console.log(a, rest); // a [ 'b', 'c' ]

// Example 3: destructuring array and putting variables content in an object
var o = {};
[o.a, o.b, o.rest] = f1();
console.log(o); // { a: 'a', b: 'b', rest: 'c' }

// Example 4:  swap variable values
[a,b] = [b,a];
console.log(a, b); // b a

// Example 5: keep only the nth elements
var [, ...lastElements] = f1();
console.log(lastElements); // [ 'b', 'c' ]

// Example 6: nested arrays
var f2 = function() {
    return [
        'a',
        'b',
        [
            'c',
            'd'
        ]
    ];
};
var [var1, var2, [var3, var4]] = f2();
console.log(var1, var2, var3, var4); // a b c d

// Example 7: using multiple desctructuring
[,, [var3, var4]] = [var1, var2] = f2(); // Be careful: a destructuring statement doesn't return the new array but the whole one.
console.log(var1, var2, var3, var4); // a b c d
