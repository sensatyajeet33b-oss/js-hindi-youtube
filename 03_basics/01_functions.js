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
    return number1+number2
    
}


const result = addtwonumbers(3, 5)//arguments
// console.log(result);

function loginUserMessage(username="sam"){
    if (username=== undefined) {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("satyajeet"))
console.log(loginUserMessage())

