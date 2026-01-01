const name= "hitesh"
const repoCount= 50
// console.log(name+repoCount+" value"); // not recommended


// string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

// declaring a string
const gameName= new String('hitesh-youtube-chaiaurcode')

console.log(gameName);
console.log(gameName[0]);

console.log(gameName.length)
console.log(gameName.toUpperCase()) // no change in original value
console.log(gameName.charAt(1))
console.log(gameName.indexOf('s'))
const newString= gameName.substring(0,4) // start from 0 index and end with exclusive
console.log(newString)

const anotherString= gameName.slice(-13,4) // can take negative indexing
console.log(anotherString)
//  same as string slicing in python
// substring does not work with negative indexing

const newStringOne= "    hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url= " https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url.includes('satyajeet'))

console.log(gameName.split('-'));
