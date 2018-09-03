/**
 * Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.
 */

// 1 - When calling `calculus()(5,6)`, we calculate using a and b even if they are not in current scope. They are part of calculus() scope.
function calculus() {
    let a = 5;
    let b = 2;

    function doSomeWeirdCalculation(nb1, nb2) {
        return nb1 * nb2 * a * b;
    }

    return doSomeWeirdCalculation;
}

let result = calculus()(5,6);

console.log('1:');
console.log(result);


// 2 - For each iteration, we will have one a new `i` in its own scope.
// If we use var, it won't create a new variable for each iteration but use the same one.

console.log('2:');
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 10);
}

// 3 -- For each iteration, we pass a function to an array that we call later. We then have 10 new scopes and closures.

console.log('3:');
var functionArray = [];
for (let i = 0; i < 10; i++) {
    var newFunction = function() {
        console.log(i);
    }
    functionArray.push(newFunction);
}

for (var j = 0; j < 10; j++) {
    functionArray[j]();
}

// 4 -- Example from Exercise 4 of Frontend Masters - Deep Javascript Foundations (Kyle Simpson)

/**
 * Here the click event will have access to its scope and all its parents scope,
 * so it will have access to setupWorkDescription scope.
 */

function setupWorkDescription(workEntryData, $workDescription) {
    $workDescription.text(formatWorkDescription(workEntryData.description));

    if (workEntryData.description.length > maxVisibleWorkDescriptionLength) {
        $workDescription
            .addClass("shortened")
            .on("click", function onClick() {
                $workDescription
                    .removeClass("shortened")
                    .off("click", onClick)
                    .text(workEntryData.description);
            });
    }
}

/**
 * A similar example
 */
function setupWorkDescription(workEntryData, $workDescription) {
    $workDescription.text(formatWorkDescription(workEntryData.description));

    if (workEntryData.description.length > maxVisibleWorkDescriptionLength) {
        $workDescription.addClass("shortened");
        $workDescription.on("click", toggleLongDescription);
    }

    function toggleLongDescription() {
        if ($workDescription.hasClass("shortened")) {
            $workDescription.removeClass("shortened");
            $workDescription.text(workEntryData.description);
        } else {
            $workDescription.addClass("shortened");
            $workDescription.text(formatWorkDescription(workEntryData.description));
        }
    }
}