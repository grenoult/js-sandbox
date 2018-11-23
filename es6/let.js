/**
 * When using `var`, variable belongs to the lexical scope of the function.
 */
(function() {
    var x = 1;
    if (x === 1) { var y = 2; }
    console.log(x,y); // 1 2
})();

/**
 * When using `let`, variable belongs to the block it's declared; here the `if` statement.
 */
(function () {
    var x = 1;
    if (x === 1) { let y = 2; }
    // console.log(x, y); // ReferenceError: y is not defined
})();

/**
 * Useful to keep a value per block:
 */
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 10);
}