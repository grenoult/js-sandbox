/**
 * Delegation pattern, also known as Object Delegation Pattern or Prototypal Inheritance.
 * 
 * Here we create one link object `c1` from Car object where Vehicle object is delegated.
 * Therefore, they will share the same context (`this`).
 * 
 * Maybe not the best example as it looks like inheritance.
 * 
 * Summary: quite good to share the same context between objects but can be confusing
 * if using same property names between objects. It's good to know about this pattern
 * but I wouldn't use it that much; I prefer module pattern in most cases.
 * 
 */

var Vehicle = {
    start: function() {
        console.log('Starting '+this.name+' vehicle.');
    }
}

var Car = Object.assign(Object.create(Vehicle), {
    create: function(name) {
        this.name = name;
    }
});

var c1 = Object.create(Car);

c1.create('Tesla');
c1.start(); // Starting Tesla vehicle.