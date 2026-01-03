// dates

let mydate= new Date()// creating date object
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toTimeString())
console.log(mydate.toUTCString())
console.log(mydate.toDateString())

console.log(typeof mydate)

// let mycreateddate= new Date(2026,0,3)
// let mycreateddate= new Date(2026,0,3,5,3)
// let mycreateddate= new Date("2023-01-14")
let mycreateddate= new Date("01-3-2026")
console.log("testing",mycreateddate.getDate())
// console.log(mycreateddate.toLocaleString());

// let mytimestamp= Date.now()
// console.log(mytimestamp)
// console.log(mycreateddate.getTime())
// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))

let newdate= new Date()
console.log(newdate)
console.log(newdate.getFullYear())
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getMonth())

console.log(newdate.toLocaleString('default',{
    weekday:"long"

}))