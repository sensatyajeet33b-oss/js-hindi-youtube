//  primitive - call by value


// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score=100
// javascript is dynamically types language


// Reference type (Non-primitive)

// Array, Objects, Functions

const heros= [ "shaktiman", "naagraj"," doga"];
let myObj={
    name: "hitesh",
    age: "22",
}

const myFunction=function(){
    console.log("hello world")
}

console.log(typeof heros)

console.log(typeof(myFunction))


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object (object function)

// stack(primitive), heap(non-primitive)

// whenever we access anything inside the stack, its copy is created
// whenever we access anything inside the heap, its reference is given
let myYoutubename="hiteshchoudharydotcom"
let anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}


let userTwo= userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);