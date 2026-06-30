// if, else, else if, switch-case, early return pattern

// if, else, else if
if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition2 is true
} else {
    // code to execute if none of the above conditions are true
}
// Example
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Example
if(isLoggedIn && isAdmin) {
    console.log("Welcome back!");
} else if(isLoggedIn) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in.");
}


// switch-case
switch (value) {
    case 1:
        console.log("Value is 1");
        break; // break is used to exit the switch statement after a case is executed
    case 2:
        console.log("Value is 2");
        break;
    default:
        console.log("Value is not 1 or 2");
}
// Example
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}

// early return pattern
function processInput(input) {
    if (!input) {
        console.log("No input provided");
        return; // early return if input is not provided
    }
    // continue processing the input
    console.log("Processing input:", input);
}
// Example
function calculateDiscount(price, discount) {
    if (price <= 0) {
        console.log("Invalid price");
        return; // early return for invalid price
    }
    if (discount < 0 || discount > 100) {
        console.log("Invalid discount");
        return; // early return for invalid discount
    }
    const discountedPrice = price - (price * (discount / 100));
    console.log("Discounted Price:", discountedPrice);
}
