console.log("2">1)
console.log("02">1)

console.log(null > 0);
console.log(null ==  0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined ==  0);
console.log(undefined >= 0);

// the reason is that an equality check == and comparisions > < >= <= work differently.
// Comparisions convert null to a number, treating as 0.


// === for strict check

console.log("2"==2);
console.log("2"===2);




