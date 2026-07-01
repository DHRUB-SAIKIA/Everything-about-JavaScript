//1. Print number from 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
} // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

//2. Print numbers from 10 to 1 using while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
} // Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

//3. Print even numbers from 1 to 20 using for loop
for (let k = 1; k <= 20; k++) {
    if (k % 2 === 0) {
        console.log(k);
    }
} // Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

//4. Print odd numbers from 1 to 15 using while loop
let l = 1;
while (l <= 15) {
    if (l % 2 !== 0) {
        console.log(l);
    }
    l++;
} // Output: 1, 3, 5, 7, 9, 11, 13, 15

//5. Print multiplication table of 5 (i.e. , 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50) using for loop
for (let m = 1; m <= 10; m++) {
    console.log(`5 x ${m} = ${5 * m}`);
} // Output: 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50

//6. Find the sum of numbers from 1 to 100 using a loop
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum); // Output: 5050

//7. Print all numbers between 1 to 50 that are divisible by 3.
for (let n = 1; n <= 50; n++) {
    if (n % 3 === 0) {
        console.log(n);
    }
} // Output: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48

//8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
// (e.g. , "1 is odd", "2 is even", "3 is odd", ...)
let val = prompt("Enter a number: ");
for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
} //if user enters 5, Output: 1 is odd, 2 is even, 3 is odd, 4 is even, 5 is odd

//9. Count how many numbers between 1 and 100 are divisible by both 3 and 5.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
} // Output: 15, 30, 45, 60, 75, 90