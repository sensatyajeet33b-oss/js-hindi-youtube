const coding = ["js", "ruby", "java", "python", "cpp"]

//call back function does not require function name
// coding.forEach( function (item) {
//     console.log(item)
// }  )

// coding.forEach((item) => {
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme) // give reference of the function

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const mycoding = [
    {
        language: 'javascript', languagefilename: "js"
    },
    {
        language: 'java', languagefilename: "java"
    },
    {
        language: 'python', languagefilename: "py"
    },
]

mycoding.forEach((item) => {
    console.log(item.language)
})