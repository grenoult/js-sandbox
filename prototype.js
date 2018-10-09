'use strict';

var User = function(name) {
    this.name = name;
}

User.prototype.sayHello = function() {
    return 'Hello, I am ' + this.name + '.';
}

var user1 = new User('Guillaume'); // `User` called with `new` is a "constructor" that will be linked to user1
var user2 = new User('Will');
var user3 = new User('G');

user2.sayHi = function () {
    return this.sayHello().replace('Hello', 'Hi');
}
console.log(user2.sayHi());
console.log(user1.constructor === User); // true
console.log(User.constructor === User.__proto__.constructor); // A bit confusing: there's no constructor directly on User, it goes up the prototype chain to find it.

console.log(User.prototype === user1.__proto__);

/**
 * Here we add a property and method on User prototype.
 * All objects created will now have them.
 * JS engine first tries to get them from object itself, can't find
 * them and then goes up the prototype chain to find it.
 * Note: there is no copy like other object-oriented languages, instead JS creates a link between these objects.
 */
User.prototype.preference = 'chocolate';
User.prototype.getPreference = function() {
    return this.preference; // `this` here will be whatever objects call this method
}

console.log(user1.getPreference()); // chocolate
console.log(user2.getPreference()); // chocolate
user2.preference = 'vanilla';
console.log(user2.getPreference()); // vanilla
console.log(user3.getPreference()); // chocolate

/**
 * Updating prototype will update all `getPreference()` values
 * from objects using prototype value (i.e. not having a `preference` property defined)
 */
User.prototype.preference = 'strawberry';
console.log(user1.getPreference()); // strawberry
console.log(user2.getPreference()); // vanilla
console.log(user3.getPreference()); // strawberry

// console.log(user1.__proto__);

// console.log(user1.__proto__);
// console.log(user2.__proto__);