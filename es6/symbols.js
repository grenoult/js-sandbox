/**
 * New primitive type introduced in ES6.
 * 
 * A symbol value may be used as an identifier for object properties; this is the data type's only purpose.
 * 
 */

// Example 1 - built-in iterators with for .. of
var arr = [1,2,3];
for (var v of arr) { // `for .. of` doesn't exist on objects.
    console.log(v); // 1 2 3, `v` will be the value of each array element
}

// Under the hood, spread operator does a for .. of
console.log([...arr]); // [ 1, 2, 3 ]
