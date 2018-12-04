var double = x => x*2;

double(10); // 20

// Example to return an object, as curly braces are used
var getObj = () => ({id: 1, name: 'test'});

/**
 * Arrow functions and binding.
 * Arrow function don't have their own lexical context. They use the parent one.
 * This can be useful in the below example.
 */
var obj = {
    id: 1,
    getValue: function () {
        setTimeout(function () {
            console.log(this.id); // undefined
            // the result is undefined here because setTimeout function has its own scope
            // to fix this I can use .bind(this) below, or add at the beginning of the 
            // function `var context = this;`, which is not great.
            // An alternate solution is to use the arrow function, see below.
        }, 1)
    }
};
obj.getValue(); // undefined

var obj = {
    id: 1,
    getValue: function () {
        setTimeout(() => {
            console.log(this.id); // 1
            // the result is 1 here because setTimeout arrow function will use
            // its parent scope.
        }, 1)
    }
};
obj.getValue(); // 1

/**
 * We can add also default parameters
 */
var triple = (x = 3) => x*3;
console.log(triple()); // 9
console.log(triple(10)); // 30

// Same for old function:
var triple = function triple(x = 3) { return x*3; }