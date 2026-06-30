// Predict the result: true + false, null + 1, 5 + "5", !!undefined

console.log(true + false); // 1
// Explanation: true is coerced to 1 and false is coerced to 0, so 1 + 0 = 1

console.log(null + 1); // 1
// Explanation: null is coerced to 0, so 0 + 1 = 1

console.log(5 + "5"); // "55"
// Explanation: 5 is coerced to "5", so "5" + "5" = "55"

console.log(!!undefined); // false
// Explanation: undefined is coerced to false, so !!undefined = false