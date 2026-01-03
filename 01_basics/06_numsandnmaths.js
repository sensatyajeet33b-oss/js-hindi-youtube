const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance)
// console.log(balance.toString().length)
// console.log(balance.toString()[2])
// console.log(balance.toString().charAt(2))
// console.log(balance.toFixed(2));

const othernumber = 123.8966;
// console.log(othernumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // us format
// console.log(hundreds.toLocaleString('en-IN')) // indian format

// maths 

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(2.4))
// console.log(Math.round(2.7))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(2**3);
// console.log(Math.min(2,6,3,6,56))

console.log(Math.random()) // lies between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)