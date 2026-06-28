// Temporal Dead Zone in JavaScript

// Temporal Dead Zone refers to the time between the entering of the scope and the actual declaration of a variable. During this time, if you try to access the variable, it will throw a ReferenceError.
// utna area jitna mein JS ko pata hai ki variable exist karta hai lekin abhi tak initialize nahi hua hai. Isliye agar aap us variable ko access karne ki koshish karte hain, to aapko ReferenceError milega.

console.log(a); // ReferenceError: Cannot access 'a' before initialization

let a = 5;
console.log(a); // 5

let b;
console.log(b); // undefined

const c = 10;
console.log(c); // 10

var d = 15; // var declarations are hoisted and initialized with undefined, so accessing them before declaration does not throw an error.
console.log(d); // undefined