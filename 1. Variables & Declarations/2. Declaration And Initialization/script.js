// Declaration and Initialization

var a; // Declaration
var a = 10; // Initialization
// window mein add hota hai
// function scoped hota hai
function test() {
    if (true) {
        var a = 20; // Re-declaration allowed
    }
}
// app firse declear kar sakte hai same name se and erroe nahi ayega
var b = 20;
var b = 30; // Re-declaration allowed

let c = 40;
let c = 50; 
// window mein add nahi hota hai
// Re-declaration not allowed, will throw an error ❌

const dulha = "Lab"; // declear a variable that icannot be reassigned
const dulhan = "Lab"; // Re-declaration not allowed, will throw an error ❌

