// A variable declaration will always internally be hoisted (moved) to the top of the current scope. This means the following:
console.log(hello);
var hello;
hello = "I'm a variable";
// is equivalent to (in terms of declaration):
var hello;
console.log(hello);
hello = "I'm a variable";
// accessing a let/const variable before its declaration will throw an error. This is due to the fact that they aren’t accessible before their declaration in the code

// More about this error:
foo = 123;
console.log(foo); // '123' as foo will be instanciated in the first compiler pass (initialization), then assigned 123 in the second pass (declaration).
var foo;

bar = 123;
console.log(bar); /* 'ReferenceError: bar is not defined' 
 as bar will be instanciated in the first compiler pass (initialization), 
 but not assigned in the second pass (declaration): TDZ error.
 This is to prevent assigning a value to variable before declaring it.
*/
let bar;

/**
 * At compile time, both var and let are added to their scope.
 * At runtime, when the scope is entered, all var are assigned 'undefined' and therefore can be used.
 * However, let variables do not get initialized at the beginning of the scope, they get assigned to undefined value at the let keyword.
 * Trying to access this causes a TDZ error.
 * When the lexical scope containing var is entered, all 
 * 
 * Myths:
 *  - let don't hoist: wrong. They add their declaration at the beginning of the scope but don't have value (uninitialised state), 
 *    hence TDZ error if we try to access it before the let keyword.
 * 
 * 
 * 
 */

/**
 * Sources:
 * 
 * https://www.sitepoint.com/how-to-declare-variables-javascript/
 * https://stackoverflow.com/a/33198850/1145134
 */
