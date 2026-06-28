// Hoisting impact per type in JavaScript

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, the behavior of hoisting differs based on the type of declaration used: var, let, const, and function declarations.
// ek variable ko jab Js mein banaate hai to wo variable do hisso mein toot jaata hai and uska declear part neeche chala jaata hai aur uska initialisation upar chala jaata hai.

// 1. var
console.log(a); // Output: undefined (hoisted but not initialized)
var a = 10;
console.log(a); // Output: 10

// 2. let
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20



// 3. const
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // Output: 30

// 4. Function Declarations
console.log(myFunction()); // Output: "Hello, World!"
function myFunction() {
    return "Hello, World!";
}

// 5. Function Expressions
// console.log(myFuncExpr()); // TypeError: myFuncExpr is not a function
var myFuncExpr = function() {
    return "Hello from function expression!";
};
console.log(myFuncExpr()); // Output: "Hello from function expression!"

// Summary:
// - Variables declared with var are hoisted and initialized with undefined.
// - Variables declared with let and const are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
// - Function declarations are hoisted and can be called before they are defined.
// - Function expressions (assigned to variables) are hoisted as variables, but the function itself is not hoisted, leading to a TypeError if called before assignment. 