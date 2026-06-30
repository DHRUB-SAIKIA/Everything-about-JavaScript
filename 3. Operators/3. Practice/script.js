//a.
let x = 10;
let y = 20;
if (x > 5 && y < 25) {
    console.log("A");
}else {
    console.log("B");
}
 // Output: A

//b.
let isAdmin = true;
let isLoggedIn = false;
if (isAdmin || isLoggedIn){
    console.log("Access granted ");
} else {
    console.log("Access denied");
}
// Output: Access granted

//c.
let tem = 35;
if (tem > 30) {
    console.log("Hot");
} else {
    console.log("Pleasent");
}
// Output: Hot

//d.
let a= 0;
if (a) {
    console.log("True");
} else {
    console.log("False");
}
// Output: False

//e.
let score = 78;
let grade = (score >= 90) ? "A" : (score >= 75) ? "B" : (score >= 60) ? "C" : "Fail";
console.log(grade);
// Output: B

//f.
let points = 120;
let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
console.log(status);
// Output: Gold

//g.
let loggedIn = true;
let hastoken = false;
let access = loggedIn && hastoken ? "Access granted" : "Access denied";
console.log(access);
// Output: Access denied

//h.
let a = 5;
a++;
console.log(a);
// Output: 6

//i.
let b = 7;
++b;
console.log(b);
// Output: 8

//j.
let x = 3;
let y = x++;
console.log(x, y);
// Output: 4 3

//k.
let p = 4;
let q = ++q;
console.log(p, q);
// Output: 5 5

//l.
let m = 10;
console.log(m--); // Line 1
console.log(m);   // Line 2
// Output: 10 9

//m.
let n = 5;
let result = n++ + ++n;
console.log(result);
// Output: 12

//n.
let likes = 100;
function likePost(){
    return ++likes;
}
console.log(likePost());
console.log(likes);
// output: 101 101

//o.
let count = 5;
if (count -- === 5){
    console.log("Matched");
} else {
    console.log("Not Matched");
}
// Output: Matched
