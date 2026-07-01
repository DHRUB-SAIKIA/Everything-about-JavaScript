//1. Stop at first multiple of 7
// Write a loop from 1 to 100 that:
// - prints each number
// - stops completely when it finds the first number divisible by 7

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break;
    }
} // Output: 1, 2, 3, 4, 5, 6, 7

//2. Skip multiples of 3
// Write a loop from 1 to 20 that:
// - skips numbers divisible by 3
// - Print all other numbers
// 💡 Use contiue

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
} // Output: 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20

//3. Print First 5 odd numbers only
// Write a loop from 1 to 100 that:
// - prints only the first 5 odd numbers
// - then stop the loop
// 💡 Use both if, continue, and a counter + break

let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
    count++;
    if (count === 5) {
        break;
    }
} // Output: 1, 3, 5, 7, 9