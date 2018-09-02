// A variable declaration will always internally be hoisted (moved) to the top of the current scope. This means the following:
console.log(hello);
var hello;
hello = "I'm a variable";
// is equivalent to:
var hello;
console.log(hello);
hello = "I'm a variable";
// accessing a let/const variable before its declaration will throw an error. This is due to the fact that they aren’t accessible before their declaration in the code

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
 * Sources:
 * 
 * https://www.sitepoint.com/how-to-declare-variables-javascript/
 * https://stackoverflow.com/a/33198850/1145134
 */
