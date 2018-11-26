/**
 * Exists only in it's block; similar to `let`.
 * A constant is a value that can't be reassigned.
 */
const x = 3;
// x = 4; // this will fail

const arr = [1, 2, 3];
arr[0] = 5; arr.push(4); // This will work: `arr` points to the same value, an array, even if it's modified.

/**
 * If we want to keep value immutable:
 *  - we can still use const for string or number
 *  - we can use `Object.freeze()` for objects/array (shallow)
 */
const arr2 = [1, 2, 3];
Object.freeze(arr2);
arr2[0] = 5; 
console.log(arr2); // Nothing is being modified: [ 1, 2, 3 ]
arr2.push(4); // TypeError: Cannot add property 3, object is not extensible
