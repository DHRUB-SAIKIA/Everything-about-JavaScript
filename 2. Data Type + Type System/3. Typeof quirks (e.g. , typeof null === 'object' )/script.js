// Typeof quirks in JavaScript

// Quirks are behaviors in JavaScript that may not be intuitive or expected. One common quirk is the behavior of the `typeof` operator, especially when it comes to certain values like `null`.

// Example 1: typeof null
console.log(typeof null); // Output: "object"
// This is a well-known quirk in JavaScript. The `typeof` operator returns "object" for `null`, which can be misleading since `null` is not actually an object. This behavior is a result of the way JavaScript was originally implemented and has been preserved for backward compatibility.

// Example 2: typeof undefined
console.log(typeof undefined); // Output: "undefined"
// The `typeof` operator correctly identifies `undefined` as "undefined".

// Example 3: typeof NaN
console.log(typeof NaN); // Output: "number"
// Interestingly, `NaN` (Not-a-Number) is considered a number type in JavaScript, even though it represents an invalid number.

// Example 4: typeof function
function exampleFunction() {}
console.log(typeof exampleFunction); // Output: "function"
// Functions are a special type in JavaScript, and the `typeof` operator correctly identifies them as "function".

// Example 5: typeof array
const exampleArray = [1, 2, 3];
console.log(typeof exampleArray); // Output: "object"
// Arrays are technically objects in JavaScript, so the `typeof` operator returns "object" for arrays as well.

// More examples
NaN === NaN; // false
null === null; // true
undefined === undefined; // true
[] === []; // false (different references)
//{} === {}; false (different references)
[] +  []; // "" (empty string, due to type coercion)


// Conclusion:
// Understanding these quirks is important for developers to avoid confusion and write more predictable code. Always be cautious when using `typeof`, especially with values like `null` and arrays.