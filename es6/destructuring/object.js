var f1 = () => ({id: 42, name: 'Guillaume', description: 'test test test'});
var f2 = () => ({ id: 42, name: 'Guillaume', description: 'test test test', groups: { a: 'Group A', b: 'Group B', c: 'Group C'}});

// Example 1: destructuring using similar or different variable names, and default value
var {
    id, 
    name, 
    description: d, // `d` is the target here. Property name always on the left.
    var1 = 'a'
} = f1() || {}; // fail safe if function doesn't return an object
console.log(id, name, d, var1); // 42 'Guillaume' 'test test test' 'a'

// Example 2: destructuring nested object
var {
    id,
    name,
    description,
    groups: {
        a, 
        b
    } = {} // in case `groups` object property is not provided
} = f2();
console.log(id, name, description, a, b); // 42 'Guillaume' 'test test test' 'Group A' 'Group B'

// Example 3: using an already defined variable for destructuring and using multiple variable assignments
var a, b, c;
({
    id: a,
    name: b,
    name: c,
} = f2()); // We have to use parentheses here
console.log(a, b, c); // 42 'Guillaume' 'Guillaume'