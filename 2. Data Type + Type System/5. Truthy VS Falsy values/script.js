// Truthy and Falsy values

// Trick to check if a value is truthy or falsy is to use the double NOT operator (!!) before the value. This will convert the value to a boolean and return true for truthy values and false for falsy values.

// 0, false, "", null, undefined, NaN, document.all return false

if(null){
    console.log("Falsy");
}
if(-1){
    console.log("Truthy");
}