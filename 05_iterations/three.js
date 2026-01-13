// for of
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

const greeting="hellow world!"
for (const greet of greeting) {
    console.log(greet)
}
// maps

const map=new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATES OF AMERICA")
map.set("Fr","FRANCE")
console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
}

const myobject={
    game1:'NFS',
    game2:'Spiderman'
}

// for (const [key,value] of myobject) {
//     console.log(key,":-",value)
// }



