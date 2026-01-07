// var c=300
let a=300



if (true) {
    let a = 10
    const b = 20
    var c = 30 
    console.log("inner",a);    
}


console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
    
    // console.log(website)

    two()
}

one()


// +++++++++++ interesting +++++++++

console.log(addone(10))
function addone(num){
    return num+1
}

console.log(addone(5))

// hoisting
// console.log(addTwo(8))// can not access 

const addTwo=function(num){
    return num+2
}

console.log(addTwo(5))