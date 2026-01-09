// immediately invoked function expressions (IIFE)

(function chai() {
    // named iife
    console.log(`DB CONNECTED`)
}
)();

// chai()

// ()()
//  the first parenthesis pair is for function definition and the second pair is for function execution
// to prevent the global scope from polluting, so we use IIFE
((name)=> {

    console.log(`db connected two ${name}`)
})('hitesh')

// to make this function execute we need to add semicolon to the above function
