// Arithmetic, comparison, logical, assignment, unary, ternary

// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0
console.log("Exponentiation: " + (a ** b)); // 100000

// Comparison Operators
console.log("Equal to: " + (a == b)); // false
console.log("Not equal to: " + (a != b)); // true
console.log("Strict equal to: " + (a === b)); // false
console.log("Strict not equal to: " + (a !== b)); // true
console.log("Greater than: " + (a > b)); // true
console.log("Less than: " + (a < b)); // false
console.log("Greater than or equal to: " + (a >= b)); // true
console.log("Less than or equal to: " + (a <= b)); // false

// Logical Operators
let x = true;
let y = false;
console.log("Logical AND: " + (x && y)); // false
console.log("Logical OR: " + (x || y)); // true
console.log("Logical NOT: " + (!x)); // false

// Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log("Addition Assignment: " + c); // 25
c -= 10; // c = c - 10
console.log("Subtraction Assignment: " + c); // 15
c *= 2; // c = c * 2
console.log("Multiplication Assignment: " + c); // 30
c /= 3; // c = c / 3
console.log("Division Assignment: " + c); // 10
c %= 4; // c = c % 4
console.log("Modulus Assignment: " + c); // 2

// Unary Operators
let d = 5;
console.log("Unary Plus: " + (+d)); // 5
console.log("Unary Negation: " + (-d)); // -5
console.log("Increment: " + (++d)); // 6
console.log("Decrement: " + (--d)); // 5

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote); // Yes
