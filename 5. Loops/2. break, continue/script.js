// break, continue

// break: stops the loop entirely
for (let i = 0; i < 2001; i++) {
    if (i === 32) {
        break; // exit the loop when i is 32
    }
    console.log(i);
} //Output: 0, 1, 2, 3, ..., 31

// continue: skips the current iteration and moves to the next one
for (let i = 0; i < 2001; i++) {
    if (i === 32) {
        continue; // skip the iteration when i is 32
    }
    console.log(i);
} //Output: 0, 1, 2, 3, ..., 31, 33, 34, ..., 2000