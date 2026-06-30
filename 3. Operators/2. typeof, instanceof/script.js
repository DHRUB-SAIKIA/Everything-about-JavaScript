// typeof, intanceof

// typeof: returns a string indicating the type of the unevaluated operand

console.log(typeof 42); // "number"
console.log(typeof NaN); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are also objects)
console.log(typeof function(){}); // "function"

// instanceof: tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object

function Person(name) {
    this.name = name;
}

const john = new Person('John');

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
console.log(john instanceof Array); // false