const marvel_heros=["heroes","ironman","spiderman"]
const dc_heros= ["superman","flash","batman"]

// marvel_heros.push(dc_heros) //insert array inside array kinda nested array
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)


// spread operator
const allNewHeros= [...marvel_heros,...dc_heros] // kaanch ka glass spread
console.log(allNewHeros)



const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]


// const realanotherArray= another_array.flat(1)
// console.log(realanotherArray);

const realanotherArray= another_array.flat(2)
console.log(realanotherArray);

// const realanotherArray= another_array.flat(Infinity)
// console.log(realanotherArray);


console.log(Array.isArray("Hitesh"))// check whether it is an array or not
console.log(Array.from("hitesh"))// convert to array form
console.log(Array.from({name:"hitesh"}))// interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))