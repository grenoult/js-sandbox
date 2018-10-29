/**
 * Boolean coercion
 * 
 * See https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#toboolean
 * Everything that is:
 *  - undefined
 *  - null
 *  - false
 *  - +0, -0, and NaN
 *  - ""
 *  - false
 * Will be considered as false. Everything else will be true.
 */

console.log('\nBoolean coercion:');
console.log('undefined: \t' + Boolean(undefined));
console.log('null: \t\t' + Boolean(null));
console.log('false: \t\t' + Boolean(false));
console.log('+0: \t\t' + Boolean(+0));
console.log('-0: \t\t' + Boolean(-0));
console.log('NaN: \t\t' + Boolean(NaN));
console.log('"": \t\t' + Boolean(""));
console.log('false: \t\t' + Boolean(false));

/**
 * So! Big warning here! These values are considered true and this is very confusing:
 *  - "false"
 *  - "0"
 *  - []
 *  - {}
 *  - function() {}
 *  - everything else...
 */

console.log('"false": \t' + Boolean("false"));
console.log('"0": \t\t' + Boolean("0"));
console.log('[]: \t\t' + Boolean([]));
console.log('{ }: \t\t' + Boolean({}));
console.log('function() { }: ' + Boolean(function () { }));


/**
 * To boolean
 * 
 * The double exclamations points can be (very) confusing.
 * The first exclamation point (from the right) coerces to boolean and -more importantly- negates value.
 * So the second exclamation point (the most left one) is here to double negate what the first exclamation
 * point did.
 * 
 * So this very confusing and we should use `Boolean(myVar)`, it's clearer.
 */

var myVar = "123";
console.log(!!myVar);
console.log(Boolean(myVar)); // Use this approach instead

/**
 * String to boolean convertion
 * 
 * To simplify, `==` prefers to compare numbers, so in the first statement (with `str`), `123 === 1` will return false.
 * In other statements (with `nb`), it will become `0 === 0` so true.
 * 
 * Advice: don't compare with double equal and true/false value, such as `== true` or `== false`.
 */
var str = "123";
if (str == true) {
    // no
    console.log('str');
}

var nb = 0;
if (nb == false) {
    // yes
    console.log('nb');
}

nb = '0';
if (nb == false) {
    // yes
    console.log('nb');
}

// another confusing example:
var arr = [];
if (arr) {
    console.log('arr is true');
}

if (arr == false) {
    // This is because == will try to compare numbers, so Array will be converted (toPrimitive, then toString) to string (""), then to a number (0), so it's false.
    // Again, don't use `==` for boolean comparaison. Too confusing.
    console.log('arr is false');
}

// another (again) confusing example:
console.log([] == ![]);

// Implicit coercions that can be dangerous (from Kyle Simpson)
"0" == null;            // false
"0" == undefined;       // false
"0" == false;           // true -- UH OH!
"0" == NaN;             // false
"0" == 0;               // true
"0" == "";              // false

false == null;          // false
false == undefined;     // false
false == NaN;           // false
false == 0;             // true -- UH OH!
false == "";            // true -- UH OH!
false == [];            // true -- UH OH!
false == {};            // false

"" == null;             // false
"" == undefined;        // false
"" == NaN;              // false
"" == 0;                // true -- UH OH!
"" == [];               // true -- UH OH!
"" == {};               // false

0 == null;              // false
0 == undefined;         // false
0 == NaN;               // false
0 == [];                // true -- UH OH!
0 == {};                // false

/**
 * We may think:
 *  == checks value
 *  === checks value and type
 * 
 * But it's wrong, actually:
 *  == allows coercion
 *  === disallows coercion
 * 
 * Specifications are pretty straight forward:
 *  https://www.ecma-international.org/ecma-262/9.0/index.html#sec-abstract-equality-comparison
 */

/**
 * As a general rule, it's better to do === comparaison.
 */

/**
 * However, we can sometimes use ==.
 * Why? Because left and right members are converted to number.
 */
console.log('5' == 5); // true
