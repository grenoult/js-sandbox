/**
 * Template strings in ES6 are a good and easy way to display values inside a string.
 * 
 * With tag functions, we can preprocess strings, example:
 *  - simple: format dates in strings, or numbers
 *  - advanced: internationalization, code preprocessing like JSX
 */

var foo = 123;
var bar = 456;

// Example 1
var text = `Hi, this is a text to show template strings \
where foo is ${foo} and bar is ${bar}.
There is also need to add anything for line breaks, and just a '\\' to break string for visibility.
`
console.log(text);
// Hi, this is a text to show template strings where foo is 123 and bar is 456.
// There is also need to add anything for line breaks, and just a '' to break string for visibility.

// Example 2: tag function: how it works
var fn = (strings, ...values) => {
    console.log(strings); // [ 'Hi, this is to show ', ' and ', '.' ]
    console.log(values); // [ 123, 456 ]
    return 123;
}

text = fn`Hi, this is to show ${foo} \
and ${bar}.`;
console.log(text); // 123

// Example 3: tag function, use them as preprocessor, simple case
fn = (strings, ...values) => {
    var result = '';
    for (var i in strings) {
        if (i > 0) {
            // Modification 1: double all values that are numbers
            if (typeof values[i - 1] === 'number') {
                values[i - 1] = values[i - 1]*2;
            }

            result += values[i-1];
        }
        // Modification 2: make all strings in upper case
        result += strings[i].toUpperCase();
    }
    return result;
}

text = fn`Hi, this is to show ${foo} and ${bar}.`;
console.log(text); // HI, THIS IS TO SHOW 246 AND 912.
