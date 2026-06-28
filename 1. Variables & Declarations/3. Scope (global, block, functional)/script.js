// Scope (global, block, functional)

var globalVar = "I am a global variable"; // var is a functional variable, but it is accessible globally if declared outside of a function
{
    var blockVar = "I am a block variable"; // var is a functional variable, but it is accessible globally if declared outside of a function
}

function test() {
    var functionVar = "I am a function variable";
    if (true) {
        var blockVar = "I am a block variable";
    }
}

let blockVar = "I am a block variable"; // let is a block-scoped variable, but it is not accessible outside of the block it was declared in
{
    let blockVar = "I am a block variable inside a block";
}

