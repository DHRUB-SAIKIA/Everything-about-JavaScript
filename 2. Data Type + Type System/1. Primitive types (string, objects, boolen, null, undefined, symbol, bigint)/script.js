// Primitive types (string, objects, boolean, null, undefined, symbol, bigint) in JavaScript

// Data Types in JavaScript

// Primitives - Stores the actual vaue directly. These are simple and cannot be changed internally (they are immutable). They are stored in the stack memory. The primitive types in JavaScript are:

// 1. String
let name = "John Doe"; // A sequence of characters

// 2. Number
let age = 30; // Represents both integer and floating-point numbers

// 3. Boolean
let isStudent = true; // Represents true or false values

// 4. Null
let emptyValue = null; // Represents the intentional absence of any object value

// 5. Undefined
let notAssigned; // Represents a variable that has been declared but not assigned a value

// 6. Symbol
let uniqueId = Symbol("id"); // Represents a unique and immutable value

// 7. BigInt
let bigNumber = 1234567890123456789012345678901234567890n; // Represents integers with arbitrary precision

// Reference - Does not store the actual value directly. Instead, it stores the addaress (reference) fo where the data is kept in the memory. Reference types are mutable and are stored in the heap memory. The reference types in JavaScript are:

// 1. Object
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
}; // Represents a collection of key-value pairs

// 2. Array
let numbers = [1, 2, 3, 4, 5]; // Represents an ordered list of values

// 3. Function
function greet() {
    return "Hello!";
} // Represents a block of code designed to perform a particular task
