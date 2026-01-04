//  array

const myarr= [0,1,2,3,4,5]
const myheroes=["shaktiman","naagraj"]
const myarr2= new Array(1,2,3,4)
console.log(myheroes[0])

// array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop();

// myarr.unshift(10)// insert at array start. this takes time to shift the array elements
// myarr.shift();
// console.log(myarr);

// console.log(myarr.includes(4))
// console.log(myarr.indexOf(3))

// const newarr= myarr.join()
// console.log(myarr)
// console.log(typeof newarr) // converts to string
// console.log(newarr[1])


// slice, splice 

console.log("A",myarr)

const myn1= myarr.slice(1,3)
console.log(myn1)
console.log("B", myarr)

const myn2= myarr.splice(1,3) // manipulates the original array
console.log("C", myarr)
console.log(myn2)


