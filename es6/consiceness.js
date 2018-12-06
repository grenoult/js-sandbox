var a = 5;

var obj = {
    a, // a: a
    b() { }, // b: function() { } (anonymous function, so no self reference),
    [a*a]: 'c', // we can put any expression between brackets
    ['d'+'Function']() { }, // Example of computed property name + function
    *e() { }, // Concise generator
    *['f'+'Generator']() { }, // Concise computed generator
};

console.log(obj);