const userEmail = "h@hitesh.ai"
if (userEmail) {
    console.log("got user email")
}
else {
    console.log("dont have user email")
}

// falsy
// false,0,-0,BigInt 0n,"",null,undefined,NaN
// rest all are true

// truthy values
// "0", 'false'," ",[],{},function(){}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty")
}

// nullish coalescing operator (??): null undefined

let val1;
// val1=5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 15
// val1= null ?? 10 ?? 20
val1 = undefined ?? null
val1 = null ?? undefined

console.log(val1);

//  ternary operator