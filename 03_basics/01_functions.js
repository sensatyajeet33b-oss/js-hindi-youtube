function sayMyName() {
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addtwonumbers(number1, number2) {//parameters
//     console.log(number1 + number2)
// }

function addtwonumbers(number1, number2) {//parameters
    // let result=(number1 + number2)
    // // console.log("hitesh")
    // return result
    return number1 + number2

}


const result = addtwonumbers(3, 5)//arguments
// console.log(result);

function loginUserMessage(username = "sam") {
    if (username === undefined) {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("satyajeet"))
console.log(loginUserMessage())



//... is rest operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1

}

// console.log(calculateCartPrice(200,300,400,2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})


const mynewarr=[299,400,500,600]
function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(returnsecondvalue(mynewarr));
console.log(returnsecondvalue([100,200,300,400]))


