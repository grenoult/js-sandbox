/**
 * Boxing is wrapping an object around a primitive value.
 * When the JavaScript engine sees a property accessor operation with a primitive root, 
 * it converts that primitive into an equivalent object (a primitive string into a String object, for instance) 
 * before retrieving the property. 
 * That object is thrown away once the expression's work is done.
 */

// Example 1: "testing" is a primitive string, and therefore doesn't (and can't) have methods. 
console.log("testing".toUpperCase()); // TESTING

// Example 2: an object is created around primitive value `1`, and then we try to get a property that doesn't exist.
console.log(1[0]); // undefined
console.log(1['whatever']); // undefined


