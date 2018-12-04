// Example 1: destructuring function arguments
(function ([a, b, c] = []) {
    console.log(a, b, c); // 1 2 3
})([1, 2, 3]);

// Example 2: destructuring function arguments
(function ({ a, b, c: d, e = 4 } = {}) {
    console.log(a, b, d, e); // 1 2 3 4
})({ a: 1, b: 2, c: 3 });

// Example 3: using a object for default values
var defaultObj = {
    id: 22,
    name: 'test',
    location: {
        city: 'foo',
        country: 'bar'
    },
};

var createObj = ({
    id = defaultObj.id, // Here we use as ES6 shortcut to replace `id: id`
    name = defaultObj.name,
    location: {
        city = defaultObj.location.city, // Here we use as ES6 shortcut to replace `city: city = defaultObj.location.city`
        country = defaultObj.location.country
    } = {}, // Specify a default object if not provided
} = {}) => {
    return {
        id, // Here we use as ES6 shortcut to replace `id: id`
        name,
        location: {
            city,
            country
        }
    }
}

createObj({ id: 1, name: 'Test Guy' }); // { id: 1, name: 'Test Guy', location: { city: 'foo', country: 'bar' } }